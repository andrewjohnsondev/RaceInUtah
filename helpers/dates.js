import moment from 'moment';

export const formatDateToString = (time) => {
  const dt = new Date(time);
  const formatTime = moment(dt).format('MMM DD, YYYY');
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
  const checkDate = new Date(registrationDate);
  return moment(checkDate).isAfter(today);
};
