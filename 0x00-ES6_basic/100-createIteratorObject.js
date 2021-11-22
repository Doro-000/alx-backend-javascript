export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const keys = Object.keys(employees);

  const NumDeps = report.getNumberOfDepartments(employees);
  let count = 0;

  let CountEmps = 0;
  const CurrDepEmps = employees[keys[count]].length;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const result = { value: employees[keys[count]][CountEmps], done: false };
      if (CountEmps < CurrDepEmps - 1) {
        // eslint-disable-next-line no-plusplus
        CountEmps++;
        return result;
      }
      if (count < NumDeps - 1) {
        // eslint-disable-next-line no-plusplus
        count++;
        CountEmps = 0;
        return result;
      }
      result.done = true;
      return result;
    },
  };
}
