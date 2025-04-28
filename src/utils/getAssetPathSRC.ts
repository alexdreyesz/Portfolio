export function getAssetPathSRC(path: string) {
    const isGithubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
  
    if (isGithubPages && path.startsWith('src/')) {
      path = path.replace(/^src\//, '');
    }
  
    if (path.startsWith('/')) {
      path = path.slice(1);
    }
  
    return `${import.meta.env.BASE_URL}${path}`;
}
  
  