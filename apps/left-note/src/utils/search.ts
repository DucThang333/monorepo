import Fuse from 'fuse.js';



export function fuzzySearch<T>(search: string, data: T[], keys: string[]) {
  const fuse = new Fuse(data, {
    includeScore: true,
    keys,
  })
  return fuse.search(search);
}

export function search(search: string, data: string) {
  return data.toLowerCase().includes(search.toLowerCase());
}