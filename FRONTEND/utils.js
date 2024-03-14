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

const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

export { formatDate, randomColor };
