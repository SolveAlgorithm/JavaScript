const solution = (citations) =>
  citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
