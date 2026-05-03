import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
  // These settings will be overridden in
  // ./sanity/lib/store.ts when draftMode is enabled
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});
