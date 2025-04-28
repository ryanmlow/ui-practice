const debounce = (fn: (...args: unknown[]) => void, timeout: number) => {
  let timer: NodeJS.Timeout | null = null;

  if (timer) {
    clearTimeout(timer);
  }
  return (...args: unknown[]) => {
    timer = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
};

export default debounce;
