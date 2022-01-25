const { readFile } = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const content = data.split('\n');
        content.shift();
        content.pop();
        console.log(`Number of students: ${content.length}`);
        const StudentPerDep = {};
        content.forEach((Element) => {
          const row = Element.split(',');
          const student = row.shift();
          const dep = row.pop();
          if (Object.prototype.hasOwnProperty.call(StudentPerDep, dep)) {
            StudentPerDep[dep].count += 1;
            StudentPerDep[dep].students.push(student);
          } else {
            StudentPerDep[dep] = {};
            StudentPerDep[dep].count = 1;
            StudentPerDep[dep].students = [student];
          }
        });
        for (const key in StudentPerDep) {
          if (Object.prototype.hasOwnProperty.call(StudentPerDep, key)) {
            console.log(`Number of students in ${key}: ${StudentPerDep[key].count}. List: ${StudentPerDep[key].students.join(', ')}`);
          }
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
