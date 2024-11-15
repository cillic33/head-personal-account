export function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}


export const DAY = 24 * 60 * 60 * 1000;

const MONTHS = [ "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря" ];


// Возвращает массив из трех строк (недель) относительно переданной даты
// [предыдущая неделя, текущая неделя, следующая неделя]
export function getWeeksArray(date: Date) {
  const day = date.getDay();
  const delta: number = (day > 1) ? day - 1 : 6;
  const closestMonday = new Date(date.valueOf() - delta * DAY);

  // @barrelblur: что означает 1 и 2 в конце каждого названия меременной?
  // @barrelblur: необходимо дать более семантическое название переменным
  const prevWeekDate1 = new Date(closestMonday.valueOf() - 7 * DAY);
  const prevWeekDate2 = new Date(closestMonday.valueOf() - 1 * DAY);
  const prevWeekStr = `${prevWeekDate1.getDate()}-${prevWeekDate2.getDate()} ${MONTHS[prevWeekDate2.getMonth()]}`;
  const prevWeekObj = {
    id: prevWeekDate1.toDateString(),
    text: prevWeekStr,
  }

  const currentWeekDate1 = closestMonday;
  const currentWeekDate2 = new Date(closestMonday.valueOf() + 6 * DAY);
  const currentWeekStr = `${currentWeekDate1.getDate()}-${currentWeekDate2.getDate()} ${MONTHS[currentWeekDate2.getMonth()]}`;
  const currentWeekObj = {
    id: currentWeekDate1.toDateString(),
    text: currentWeekStr,
  }

  const nextWeekDate1 = new Date(closestMonday.valueOf() + 7 * DAY);
  const nextWeekDate2 = new Date(closestMonday.valueOf() + 13 * DAY);
  const nextWeekStr = `${nextWeekDate1.getDate()}-${nextWeekDate2.getDate()} ${MONTHS[nextWeekDate2.getMonth()]}`;
  const nextWeekObj = {
    id: nextWeekDate1.toDateString(),
    text: nextWeekStr,
  }

  return [prevWeekObj, currentWeekObj, nextWeekObj];
}
