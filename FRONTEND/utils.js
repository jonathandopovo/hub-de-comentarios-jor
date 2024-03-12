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

export { formatDate };
