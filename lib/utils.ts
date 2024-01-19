export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getPreviousDate = (date: Date): Date => {
  let previousDate = new Date(date);
  previousDate.setDate(previousDate.getDate() - 1);
  return previousDate;
};

export const getNextDate = (date: Date): Date => {
  let nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate;
};
