export default function (array) {
  const randomizeArray = array.slice();
  for (let i = randomizeArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [randomizeArray[i], randomizeArray[randomIndex]] = [randomizeArray[randomIndex],randomizeArray[i]];
  }
  return randomizeArray;
}
