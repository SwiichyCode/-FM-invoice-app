export function dateGestion(date) {
  // prettier-ignore
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let newDate = new Date(date);
  let day = newDate.getUTCDate();
  if (day < 10) {
    day = "0" + newDate.getUTCDate();
  }
  let formattedDate =
    day + " " + monthNames[newDate.getMonth()] + " " + newDate.getFullYear();
  return formattedDate;
}
