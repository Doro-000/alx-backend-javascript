import { readFile } from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const content = data.split('\n');
        content.shift();
        content.pop();
        const StudentPerDep = {};
        content.forEach((Element) => {
          const row = Element.split(',');
          const student = row.shift();
          const dep = row.pop();
          if (Object.prototype.hasOwnProperty.call(StudentPerDep, dep)) {
            StudentPerDep[dep].push(student);
          } else {
            StudentPerDep[dep] = [student];
          }
        });
        resolve(StudentPerDep);
      }
    });
  });
}
