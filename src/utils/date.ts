export function getDate(date: Date) {
  return `${date.toLocaleString("en", {
    month: "long",
  })} ${date.getDate()} ${date.getFullYear()}`;
}
