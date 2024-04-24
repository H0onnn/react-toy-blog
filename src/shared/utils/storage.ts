export const getStorageItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  return JSON.parse(item);
};

export const setStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
