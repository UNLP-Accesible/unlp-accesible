/**
 * This file is used to allow Presentation to set the app in Draft Mode, which will load Visual Editing
 * and query draft content and preview the content as it will appear once everything is published
 */

import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import { readToken } from '@/sanity/env';
import { client } from '@/sanity/lib/client';

const clientWithToken = client.withConfig({ token: readToken });

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(clientWithToken, request.url);
  if (!isValid) {
    return new Response('Invalid secret', { status: 401 });
  }

  const isDraftMode = await draftMode();

  await isDraftMode.enable();

  redirect(redirectTo);
}
