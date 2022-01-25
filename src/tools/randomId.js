export default function uuid() {
  let id = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = Math.floor(Math.random() * 9999);

  for (var i = 0; i < 2; i++)
    id += letter.charAt(Math.floor(Math.random() * letter.length));

  return id + number;
}
