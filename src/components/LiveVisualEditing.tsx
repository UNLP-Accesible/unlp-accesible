'use client';

import { useLiveMode } from '@sanity/react-loader';
import { VisualEditing } from 'next-sanity/visual-editing';
import { useEffect } from 'react';

import { client } from '@/sanity/lib/client';

// Always enable stega in Live Mode
const stegaClient = client.withConfig({ stega: true });

export default function LiveVisualEditing() {
  useLiveMode({ studioUrl: '/studio', client: stegaClient });
  useEffect(() => {
    // Draft mode must only be active inside the Sanity Studio preview iframe.
    // If this component renders in a top-level window (not embedded), immediately
    // disable draft mode to prevent stale preview sessions in production.
    if (typeof window !== 'undefined' && window === window.parent) {
      location.href = '/api/disable-draft';
    }
  }, []);

  return <VisualEditing />;
}
