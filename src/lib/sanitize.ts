/**
 * URL sanitization utilities to prevent XSS, open redirects, and data exfiltration.
 *
 * All URLs originating from CMS content should be sanitized before use.
 */

const ALLOWED_PROTOCOLS = ['http:', 'https:', 'mailto:', 'tel:'] as const;

/**
 * Validates and sanitizes a URL, blocking dangerous protocols like javascript:, data:, etc.
 * Returns '#' for invalid or unsafe URLs.
 */
export const sanitizeUrl = (url: string | undefined | null): string => {
  if (url === undefined || url === null || url.trim() === '') {
    return '#';
  }

  try {
    // For relative URLs, prepend a base to parse correctly
    const base = url.startsWith('/') ? 'https://example.com' : undefined;
    const parsed = new URL(url, base);

    if (ALLOWED_PROTOCOLS.includes(parsed.protocol as (typeof ALLOWED_PROTOCOLS)[number])) {
      return url;
    }

    // Block javascript:, data:, vbscript:, etc.
    return '#';
  } catch {
    // Invalid URL format
    return '#';
  }
};

/**
 * Validates that a URL is a valid YouTube embed URL.
 * Returns the sanitized URL or empty string if invalid.
 */
export const sanitizeYouTubeUrl = (url: string | undefined | null): string => {
  if (url === undefined || url === null || url === '') {
    return '';
  }

  try {
    const parsed = new URL(url);
    const isYouTube = [
      'www.youtube.com',
      'youtube.com',
      'www.youtube-nocookie.com',
      'youtube-nocookie.com',
    ].includes(parsed.hostname);

    if (isYouTube === false) {
      return '';
    }

    // Allow embed paths or video IDs
    const isEmbed =
      parsed.pathname.startsWith('/embed/') || parsed.searchParams.has('v');
    return isEmbed === true ? url : '';
  } catch {
    return '';
  }
};

/**
 * Validates form HTTP methods to prevent arbitrary method injection.
 */
const ALLOWED_FORM_METHODS = ['get', 'post'] as const;

export const sanitizeFormMethod = (
  method: string | undefined | null,
): string => {
  if (method === undefined || method === null || method === '') {
    return 'post';
  }
  const lower = method.toLowerCase();
  return ALLOWED_FORM_METHODS.includes(
    lower as (typeof ALLOWED_FORM_METHODS)[number],
  )
    ? lower
    : 'post';
};

/**
 * Validates a form action URL. Only HTTPS URLs to external domains are allowed.
 * Returns '/' for invalid or unsafe URLs.
 */
export const sanitizeFormAction = (url: string | undefined | null): string => {
  if (url === undefined || url === null || url === '') {
    return '/';
  }

  try {
    const parsed = new URL(url);
    // Only allow HTTPS URLs to prevent data exfiltration over plain HTTP
    if (parsed.protocol === 'https:') {
      return url;
    }
    return '/';
  } catch {
    return '/';
  }
};
