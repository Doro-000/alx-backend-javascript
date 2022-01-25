const { readFileSync, existsSync } = require('fs');

function countStudents(path) {
  if (existsSync(path)) {
    const content = readFileSync(path, { encoding: 'utf-8' }).split('\n');
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
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
