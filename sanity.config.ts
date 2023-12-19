import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { projectId, dataset, apiVersion } from '@/sanity/env';
import { schema } from '@/sanity/schema';

const config = defineConfig({
  title: 'Carptravel Studio',
  basePath: '/admin',
  projectId,
  dataset,
  apiVersion,
  schema,
  plugins: [deskTool(), visionTool()],
});

export default config;
