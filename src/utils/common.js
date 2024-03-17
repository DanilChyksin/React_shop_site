export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
export const sumPrice = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
export const buildUrl = (url, params) => {
  let setUrl = url;
  Object.entries(params).forEach(([key, val], i) => {
    const cuke = !i ? "?" : "&";
    setUrl += `${cuke}${key}=${val}`;
  });

  return setUrl;
};
