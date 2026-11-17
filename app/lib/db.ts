import { neon } from '@neondatabase/serverless';

export const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_rv6Kg5InXGNL@ep-dry-forest-b3wk5pmu-pooler.c-4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

export function getDb() {
  return neon(DATABASE_URL);
}
