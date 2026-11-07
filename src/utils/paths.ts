/**
 * Utility for resolving paths safely with Astro's base URL on GitHub Pages.
 */
export function getRelativeLocaleUrl(locale: 'vi' | 'en', path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  const pathPart = cleanPath ? `/${cleanPath}` : '';
  return `${base}/${locale}${pathPart}`;
}

export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${base}/${cleanPath}`;
}

export function switchLanguage(currentPathname: string, targetLocale: 'vi' | 'en'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let relative = currentPathname;
  
  if (base && relative.startsWith(base)) {
    relative = relative.slice(base.length);
  }
  
  relative = relative.replace(/^\//, '');
  
  // Current route parts: [locale, ...rest]
  const parts = relative.split('/').filter(Boolean);
  if (parts.length > 0 && (parts[0] === 'vi' || parts[0] === 'en')) {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }
  
  const targetSubpath = parts.join('/');
  return `${base}/${targetSubpath}${targetSubpath ? '/' : ''}`;
}
