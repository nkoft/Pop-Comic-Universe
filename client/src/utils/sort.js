const compareKey = (key) => (a, b) =>
  a[key] !== b[key] ? (a[key] < b[key] ? -1 : 1) : 0;

export const AZ = (arr) => arr.sort(compareKey("title"));
export const ZA = (arr) => arr.sort(compareKey("title")).reverse();
