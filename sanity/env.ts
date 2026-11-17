export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-01';

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o2o9ouqt';

// Set useCdn to false so published updates in Sanity reflect immediately on the live server
export const useCdn = false;

export const token = process.env.SANITY_API_READ_TOKEN || '';

export const isSanityConfigured = (): boolean => {
  return Boolean(
    projectId &&
    projectId.trim() !== '' &&
    projectId !== 'your-project-id' &&
    projectId !== 'placeholder'
  );
};

