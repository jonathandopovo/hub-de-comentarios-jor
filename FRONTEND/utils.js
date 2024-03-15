const formatDate = (dateToConvert) => {
  const currentDate = new Date(dateToConvert);
  const options = {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    hour12: false,
  };
  const date = `${currentDate
    .toLocaleDateString("pt-BR", options)
    .replace(",", " às")}hrs`;

  return date;
};

const darkColors = () => {
  const colors = [
    "#1a1a40",
    "#4c0027",
    "#1e5128",
    "#082032",
    "#000000",
    "#962234",
    "#5b0045",
  ];

  return randomColor(colors);
};

const lightColors = () => {
  const colors = [
    "#ffe4e1",
    "#d8f8e1",
    "#fcb7af",
    "#b0f2c2",
    "#b0c2f2",
    "#fdf9c4",
  ];
  
  return randomColor(colors);
};

const randomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export { formatDate, darkColors, lightColors };
