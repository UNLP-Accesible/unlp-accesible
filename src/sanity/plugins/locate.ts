import { map } from 'rxjs';
import { type DocumentLocationResolver } from 'sanity/presentation';

// Pass 'context' as the second argument
export const locate: DocumentLocationResolver = (params, context) => {
  // Set up locations for page documents
  if (params.type === 'page') {
    // Subscribe to the latest slug and title
    const doc$ = context.documentStore.listenQuery(
      `*[_id == $id][0]{slug,title}`,
      { id: params.id },
      { perspective: 'previewDrafts' }, // returns a draft article if it exists
    );
    // Return a streaming list of locations
    return doc$.pipe(
      map((doc) => {
        // If the document doesn't exist or have a slug, return null
        if (!doc || !doc.slug?.current) {
          return null;
        }
        return {
          locations: [
            {
              title: doc.title || 'Untitled',
              href: `/${doc.slug.current}`,
            },
            {
              title: 'Pages',
              href: '/',
            },
          ],
        };
      }),
    );
  }
  return null;
};
