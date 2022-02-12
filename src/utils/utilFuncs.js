export const dateFormat = (date) => {
  const tempDate = date ? new Date(date) : new Date();
  const returnDate = `${
    tempDate.getMonth() + 1
  } | ${tempDate.getDate()} | ${tempDate.getFullYear()}`;

  return returnDate;
};
