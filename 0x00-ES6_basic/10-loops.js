export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const idx of arr) {
    arr[idx] += appendString;
  }

  return arr;
}
