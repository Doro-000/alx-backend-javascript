const { createServer } = require('http');
const { readFileSync, existsSync } = require('fs');
const { argv } = require('process');

const localhost = '127.0.0.1';
const port = 1245;

function countStudents(path, stream) {
  if (existsSync(path)) {
    const content = readFileSync(path, { encoding: 'utf-8' }).split('\n');
    content.shift();
    content.pop();
    stream.write(`Number of students: ${content.length}\n`);
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
        stream.write(`Number of students in ${key}: ${StudentPerDep[key].count}. List: ${StudentPerDep[key].students.join(', ')}\n`);
      }
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

const app = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      countStudents(argv[2], response);
      response.end();
    } catch (err) {
      response.end(err.message);
    }
  } else {
    response.end('Hello Holberton School!');
  }
});

app.listen(port, localhost);

module.exports = app;
