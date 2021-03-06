const express = require('express');
const { readFileSync, existsSync } = require('fs');
const { argv } = require('process');

function countStudents(path, res) {
  if (existsSync(path)) {
    const content = readFileSync(path, { encoding: 'utf-8' }).split('\n');
    content.shift();
    content.pop();
    const response = [];
    response.push('This is the list of our students');
    response.push(`Number of students: ${content.length}`);
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
        response.push(`Number of students in ${key}: ${StudentPerDep[key].count}. List: ${StudentPerDep[key].students.join(', ')}`);
      }
    }
    res.write(response.join('\n'));
  } else {
    res.write('This is the list of our students\nCannot load the database');
  }
}

const app = express();

app.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  countStudents(argv[2], response);
  response.end();
});

app.listen(1245, '127.0.0.1');

module.exports = app;
