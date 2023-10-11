const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

const DIVISIONS: { amount: number; unit: Intl.RelativeTimeFormatUnit }[] = [
  { amount: 60, unit: "seconds" },
  { amount: 60, unit: "minutes" },
  { amount: 24, unit: "hours" },
  { amount: 7, unit: "days" },
  { amount: 4.34524, unit: "weeks" },
  { amount: 12, unit: "months" },
  { amount: Number.POSITIVE_INFINITY, unit: "years" },
];

export function formatTimeAgo(date: Date) {
  // get the elapsed time between now and the date in seconds
  // divide by 1000 to convert from milliseconds to seconds
  // a negative number means the date is in the past
  // a positive number means the date is in the future
  let elapsed = (date.getTime() - Date.now()) / 1000;

  for (const { amount, unit } of DIVISIONS) {
    if (Math.abs(elapsed) < amount) {
      return formatter.format(Math.round(elapsed), unit);
    }
    // keep dividing the elapsed time by the amount to get the next unit
    // e.g. if the elapsed time is 100 hours, divide by 24 to get 4.166666666666667 days
    elapsed /= amount;
  }
}
