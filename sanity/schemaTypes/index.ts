import { type SchemaTypeDefinition } from 'sanity';

import { seoType } from './seoType';
import { faqItemType } from './faqItemType';
import { roomGalleryType } from './roomGalleryType';
import { beforeAfterType } from './beforeAfterType';
import { projectType } from './projectType';
import { serviceType } from './serviceType';
import { locationType } from './locationType';
import { postType } from './postType';
import { categoryType } from './categoryType';
import { testimonialType } from './testimonialType';
import { teamMemberType } from './teamMemberType';
import { siteSettingsType } from './siteSettingsType';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Object types
  seoType,
  faqItemType,
  roomGalleryType,
  beforeAfterType,

  // Document types
  projectType,
  serviceType,
  locationType,
  postType,
  categoryType,
  testimonialType,
  teamMemberType,
  siteSettingsType,
];

