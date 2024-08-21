export function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });

  function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}`;

  return formattedDate;
}

export function dateFormat(isoDateString: string) {
  const date = new Date(isoDateString);
  const pad = (num: any) => num.toString().padStart(2, '0');
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedHours = pad(hours);
  return `${day}.${month}.${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
}
