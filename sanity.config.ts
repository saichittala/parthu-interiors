import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { projectId, dataset, apiVersion } from './sanity/env';
import { unslopTheme } from './sanity/theme';
import { StudioLogo } from './sanity/components/StudioLogo';
import { StudioNavbar } from './sanity/components/StudioNavbar';

export default defineConfig({
  basePath: '/studio',
  name: 'parthu-interiors-studio',
  title: 'Parthu Interiors — Studio',

  projectId: projectId || 'o2o9ouqt',
  dataset: dataset || 'production',

  theme: unslopTheme,

  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Portfolio & Projects
            S.listItem()
              .title('Portfolio & Projects')
              .child(
                S.documentTypeList('project')
                  .title('Interior Design Projects')
              ),

            // Services
            S.listItem()
              .title('Services')
              .child(
                S.documentTypeList('service')
                  .title('Interior Services')
              ),

            // Locations (Local SEO Engine)
            S.listItem()
              .title('Locations (Hyderabad SEO Hubs)')
              .child(
                S.documentTypeList('location')
                  .title('Hyderabad Locations')
              ),

            S.divider(),

            // Editorial / Blog
            S.listItem()
              .title('Blog & Articles')
              .child(
                S.list()
                  .title('Blog Management')
                  .items([
                    S.listItem()
                      .title('All Articles')
                      .child(S.documentTypeList('post').title('Articles')),
                    S.listItem()
                      .title('Categories')
                      .child(S.documentTypeList('category').title('Categories')),
                  ])
              ),

            // Social Proof
            S.listItem()
              .title('Client Testimonials')
              .child(
                S.documentTypeList('testimonial')
                  .title('Homeowner Reviews')
              ),

            // Team Profiles
            S.listItem()
              .title('Team Profiles')
              .child(
                S.documentTypeList('teamMember')
                  .title('Team Members')
              ),

            S.divider(),

            // Brand & Global Settings Singleton
            S.listItem()
              .title('Brand & Global SEO Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },
});
