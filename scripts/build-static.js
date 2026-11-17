const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const apiDir = path.join(rootDir, 'app', 'api');
const apiBakDir = path.join(rootDir, '_api_bak');

// 1. Temporarily move or stash app/api routes for static export
let hasApiDir = false;
let stashedFiles = [];

function stashRoutes(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      stashRoutes(fullPath);
    } else if (file.name === 'route.ts' || file.name === 'route.js') {
      const bakPath = fullPath + '.exportbak';
      try {
        fs.renameSync(fullPath, bakPath);
        stashedFiles.push({ original: fullPath, backup: bakPath });
      } catch (e) {
        console.warn(`Could not rename ${fullPath}:`, e.message);
      }
    }
  }
}

function restoreRoutes() {
  for (const { original, backup } of stashedFiles) {
    if (fs.existsSync(backup)) {
      try {
        fs.renameSync(backup, original);
      } catch (e) {
        console.error(`Could not restore ${original}:`, e.message);
      }
    }
  }
}

if (fs.existsSync(apiDir)) {
  try {
    fs.renameSync(apiDir, apiBakDir);
    hasApiDir = true;
    console.log('Temporarily moved app/api to _api_bak for static export.');
  } catch (err) {
    console.warn('Directory rename failed, falling back to stashing route files inside app/api:', err.message);
    stashRoutes(apiDir);
  }
}

try {
  // 2. Run sitemap generation
  console.log('Running pre-export sitemap generator...');
  const sitemapResult = spawnSync('node', [path.join(__dirname, 'generate-sitemap.js')], {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, NEXT_PUBLIC_STATIC_EXPORT: 'true' }
  });

  if (sitemapResult.status !== 0) {
    throw new Error(`Sitemap generation failed with code ${sitemapResult.status}`);
  }

  // 3. Clean stale Next.js cache and lock if present
  const nextDir = path.join(rootDir, '.next');
  if (fs.existsSync(nextDir)) {
    try { fs.rmSync(nextDir, { recursive: true, force: true }); } catch (e) { }
  }

  // Run next build with static export flag and webpack
  console.log('Running Next.js static build export with webpack...');
  const buildResult = spawnSync('npx', ['next', 'build', '--webpack'], {
    cwd: rootDir,
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, NEXT_PUBLIC_STATIC_EXPORT: 'true' }
  });

  if (buildResult.error) {
    throw buildResult.error;
  }

  if (buildResult.status !== 0) {
    throw new Error(`Next build failed with code ${buildResult.status}`);
  }

  console.log('Static build export completed successfully!');
} catch (err) {
  console.error('Static export failed:', err);
  process.exitCode = 1;
} finally {
  // 4. Restore app/api if it was moved or stashed
  if (hasApiDir && fs.existsSync(apiBakDir)) {
    try {
      fs.renameSync(apiBakDir, apiDir);
      console.log('Restored app/api from _api_bak.');
    } catch (err) {
      console.error('Could not restore app/api:', err);
    }
  }
  if (stashedFiles.length > 0) {
    restoreRoutes();
    console.log(`Restored ${stashedFiles.length} stashed route files inside app/api.`);
  }
}
