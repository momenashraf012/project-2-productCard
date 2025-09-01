export const Slicer = (text: string, num: number = 50) => {
  if (text.length > num) {
    return `${text.slice(0, num)}...`;
  }
  return text;
};
