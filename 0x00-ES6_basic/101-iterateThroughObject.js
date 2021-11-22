export default function iterateThroughObject(reportWithIterator) {
  const Emps = [...reportWithIterator];
  return Emps.join(' | ');
}
