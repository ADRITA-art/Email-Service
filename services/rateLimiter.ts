const RATE_LIMIT = 5; 
let requestTimestamps: number[] = [];

export const isRateLimited = (): boolean => {
  const now = Date.now();
  requestTimestamps = requestTimestamps.filter(ts => now - ts < 60000);
  if (requestTimestamps.length >= RATE_LIMIT) return true;
  requestTimestamps.push(now);
  return false;
};
