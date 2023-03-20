const formatDate = (dateData: string) => {
  const date = new Date(dateData);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
};

export default formatDate;
