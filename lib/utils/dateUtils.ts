export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatDateAndTime = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export const getMonth = (date: Date): string => {
  const month = date.getMonth() + 1;
  return `${month}`;
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
