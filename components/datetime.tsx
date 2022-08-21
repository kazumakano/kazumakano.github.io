const dateFormat = new Intl.DateTimeFormat(
  "en-US",
  {
    month: "short",
    year: "numeric"
  }
)

export function getFormattedDate(month?: number, year?: number): string | null {
  if (month == null || year == null) {
    return null
  }
  else {
    return dateFormat.format(new window.Date(year, month - 1))
  }
}
