const fs = require('fs');
const path = require('path');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o2o9ouqt';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-01';
const token = process.env.SANITY_API_WRITE_TOKEN || 'skWRVEot4y9EkGvOa3XO0TeEplM4taOO98hznYrst4K81gnxXHyMn2Q0LxNBtQNjrZFQYiLXRAuneQtZg5oraQ31qXV7nYTquu64J01ipJVmcyg48JTY3NNpuDg9zIQiSwb0RVxWdbo8BiYbntU0lEj3aAYvvvqITujeQYOsUGVoFbQYpEB5';

const ndjsonPath = path.join(__dirname, '..', 'content', 'sanity-export.ndjson');

if (!fs.existsSync(ndjsonPath)) {
  console.error('File not found:', ndjsonPath);
  process.exit(1);
}

const lines = fs.readFileSync(ndjsonPath, 'utf8').split('\n').filter(Boolean);
const docs = lines.map(line => JSON.parse(line));

console.log(`Loaded ${docs.length} documents from ${ndjsonPath}`);

async function importBatch(batch) {
  const mutations = batch.map(doc => ({ createOrReplace: doc }));
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ mutations })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Sanity mutate failed (${res.status}): ${errText}`);
  }

  const result = await res.json();
  return result;
}

async function run() {
  const batchSize = 25;
  for (let i = 0; i < docs.length; i += batchSize) {
    const batch = docs.slice(i, i + batchSize);
    console.log(`Importing batch ${Math.floor(i / batchSize) + 1} (${batch.length} docs)...`);
    const res = await importBatch(batch);
    console.log(`Batch ${Math.floor(i / batchSize) + 1} imported successfully.`);
  }
  console.log(`\nAll ${docs.length} documents successfully imported to Sanity project "${projectId}"!`);
}

run().catch(err => {
  console.error('Import failed:', err);
  process.exit(1);
});

