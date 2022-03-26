const dateTimeFormat = new Intl.DateTimeFormat(
  "en-US",
  {
    month: "short",
    year: "numeric"
  }
)

export function getFormattedDate(month: number, year: number): string {
  return dateTimeFormat.format(new Date(year, month - 1))
}
