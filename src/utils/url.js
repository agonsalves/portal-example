/**
 * Strips the trailing slash from a string (usually a pathname)
 *
 * @param {string} pathname
 * @returns {string}
 */
export const stripTrailingSlash = pathname => pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname
