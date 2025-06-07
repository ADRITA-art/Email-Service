let failureCount = 0;
let lastFailureTime = 0;
const threshold = 3;
const cooldown = 10000;

export const canAttempt = (): boolean => {
  if (failureCount >= threshold && Date.now() - lastFailureTime < cooldown) return false;
  return true;
};

export const recordFailure = () => {
  failureCount++;
  lastFailureTime = Date.now();
};

export const resetBreaker = () => {
  failureCount = 0;
};
