export const generateRandomColorArray = (numColors) => {
  const colorsArray = Array.from({ length: numColors }, () => randomColor());
  return colorsArray;
};

export const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};
