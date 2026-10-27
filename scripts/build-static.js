const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const apiDir = path.join(rootDir, 'app', 'api');
const apiBakDir = path.join(rootDir, '_api_bak');

// 1. Temporarily move app/api if it exists (to avoid Next.js static export errors with dynamic API routes)
let hasApiDir = false;
if (fs.existsSync(apiDir)) {
  try {
    fs.renameSync(apiDir, apiBakDir);
    hasApiDir = true;
    console.log('Temporarily moved app/api to _api_bak for static export.');
  } catch (err) {
    console.warn('Could not move app/api:', err);
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

  // 3. Run next build with static export flag
  console.log('Running Next.js static build export...');
  const buildResult = spawnSync('npx', ['next', 'build'], {
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
  // 4. Restore app/api if it was moved
  if (hasApiDir && fs.existsSync(apiBakDir)) {
    try {
      fs.renameSync(apiBakDir, apiDir);
      console.log('Restored app/api from _api_bak.');
    } catch (err) {
      console.error('Could not restore app/api:', err);
    }
  }
}
