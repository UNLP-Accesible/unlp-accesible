/**
 * Sanitization utilities to prevent XSS, open redirects, and data exfiltration.
 *
 * All values originating from CMS content should be sanitized before use.
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
    const isYouTube = ['www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com', 'youtube-nocookie.com'].includes(
      parsed.hostname,
    );

    if (!isYouTube) {
      return '';
    }

    // Allow embed paths or video IDs
    const isEmbed = parsed.pathname.startsWith('/embed/') || parsed.searchParams.has('v');
    return isEmbed ? url : '';
  } catch {
    return '';
  }
};

/**
 * Validates an email address to prevent mailto: protocol injection.
 * Returns the email if valid, or empty string if invalid.
 */
const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

export const sanitizeEmail = (email: string | undefined | null): string => {
  if (!email || typeof email !== 'string') return '';
  const trimmed = email.trim();
  return EMAIL_PATTERN.test(trimmed) ? trimmed : '';
};

/**
 * Validates a CSS hex color value to prevent style injection.
 * Returns the value if it matches #RGB or #RRGGBB, otherwise undefined.
 */
const HEX_COLOR_PATTERN = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const sanitizeHexColor = (hex: string | undefined | null): string | undefined => {
  if (!hex || typeof hex !== 'string') return undefined;
  return HEX_COLOR_PATTERN.test(hex) ? hex : undefined;
};

/**
 * Validates an HTML input type attribute against an allowlist.
 * Returns 'text' for unknown or unsafe types.
 */
const ALLOWED_INPUT_TYPES = [
  'text',
  'email',
  'tel',
  'url',
  'number',
  'date',
  'time',
  'datetime-local',
  'month',
  'week',
  'color',
  'range',
  'search',
  'password',
  'checkbox',
  'radio',
  'file',
  'hidden',
  'textarea',
] as const;

export const sanitizeInputType = (type: string | undefined | null): string => {
  if (!type || typeof type !== 'string') return 'text';
  const lower = type.toLowerCase();
  return (ALLOWED_INPUT_TYPES as readonly string[]).includes(lower) ? lower : 'text';
};

/**
 * Validates form HTTP methods to prevent arbitrary method injection.
 */
const ALLOWED_FORM_METHODS = ['get', 'post'] as const;

export const sanitizeFormMethod = (method: string | undefined | null): string => {
  if (method === undefined || method === null || method === '') {
    return 'post';
  }
  const lower = method.toLowerCase();
  return ALLOWED_FORM_METHODS.includes(lower as (typeof ALLOWED_FORM_METHODS)[number]) ? lower : 'post';
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
