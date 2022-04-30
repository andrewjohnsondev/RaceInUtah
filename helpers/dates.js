import { format, compareAsc } from 'date-fns';

export const formatDateToString = (time) => {
  const formatTime = format(new Date(time), 'MMM dd, yyyy');
  return formatTime;
};

export const checkIfMultipleDays = (startDate, finishDate) => {
  if (startDate === finishDate) {
    return false;
  }
  return true;
};

export const formatDates = (startDate, finishDate) => {
  const isMultipleDays = checkIfMultipleDays(startDate, finishDate);
  if (!isMultipleDays) return formatDateToString(finishDate);
  return `${formatDateToString(startDate)} - ${formatDateToString(finishDate)}`;
};

export const compareDates = (registrationDate) => {
  const today = new Date();
  return compareAsc(new Date(registrationDate), today);
};

export const formatToCalendarDate = (time) => {
  const formatTime = format(new Date(time), 'yyyy-MM-dd');
  return formatTime;
};
