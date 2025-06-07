export const retry = async (fn: () => Promise<boolean>, retries = 3, delay = 500): Promise<boolean> => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      await new Promise(res => setTimeout(res, delay * 2 ** i));
    }
  }
  return false;
};
