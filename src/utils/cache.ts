// utils/cache.ts

interface CacheData<T> {
  data: T;
  expiry: number;
}

export const setCache = <T>(key: string, data: T): void => {
  const CACHE_EXPIRATION = 5 * 60 * 1000; // Cache for 5 minutes

  const cacheData: CacheData<T> = {
    data,
    expiry: Date.now() + CACHE_EXPIRATION,
  };

  localStorage.setItem(key, JSON.stringify(cacheData));
};

export const getCache = <T>(key: string): T | null => {
  const cacheString = localStorage.getItem(key);

  if (!cacheString) return null;

  const { data, expiry }: CacheData<T> = JSON.parse(cacheString);

  if (Date.now() > expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
};
