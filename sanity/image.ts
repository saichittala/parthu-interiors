import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from './env';

const imageBuilder = projectId
  ? createImageUrlBuilder({
      projectId: projectId || 'o2o9ouqt',
      dataset: dataset || 'production',
    })
  : null;

/**
 * Generates an optimized WebP image URL from Sanity image assets or local paths.
 * Automatically enforces WebP formatting, responsive sizing, and quality compression.
 */
export const urlForImage = (
  source: Image | string | any,
  options?: { width?: number; height?: number; quality?: number }
): string => {
  if (!source) return '';

  // If source is already a local static path or string URL
  if (typeof source === 'string') {
    if (source.includes('cdn.sanity.io') && !source.includes('fm=webp')) {
      const sep = source.includes('?') ? '&' : '?';
      return `${source}${sep}auto=format&fm=webp`;
    }
    return source;
  }

  // If source is a Sanity asset reference or image object
  if (imageBuilder && (source?.asset || source?._ref)) {
    let builder = imageBuilder
      .image(source)
      .auto('format')
      .format('webp')
      .quality(options?.quality || 85)
      .fit('max');

    if (options?.width) builder = builder.width(options.width);
    if (options?.height) builder = builder.height(options.height);

    return builder.url();
  }

  // Fallback if asset has a direct URL
  if (source?.asset?.url) {
    const rawUrl = source.asset.url;
    if (rawUrl.includes('cdn.sanity.io')) {
      const sep = rawUrl.includes('?') ? '&' : '?';
      return `${rawUrl}${sep}auto=format&fm=webp`;
    }
    return rawUrl;
  }

  return source?.url || '';
};

export const urlFor = (source: any) => {
  if (!imageBuilder) {
    throw new Error('Sanity image builder is not initialized');
  }
  return imageBuilder.image(source).auto('format').format('webp');
};
