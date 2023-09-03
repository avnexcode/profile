export const wait = (time: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, time);
  });
};
