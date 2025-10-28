export function download2view(uri: string): string {
  return `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(uri)}`
}

const dateFormat = new Intl.DateTimeFormat(
  "en-US",
  {
    month: "short",
    year: "numeric"
  }
)

export function getFormattedDate(month?: number, year?: number): string | null {
  return month == null || year == null ? null : dateFormat.format(new Date(year, month - 1))
}
