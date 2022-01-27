export default function uuid() {
  let id = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "123456789";

  for (var i = 0; i < 2; i++)
    id += letter.charAt(Math.floor(Math.random() * letter.length));

  for (var i = 0; i < 4; i++)
    id += number.charAt(Math.floor(Math.random() * number.length));

  return id;
}
