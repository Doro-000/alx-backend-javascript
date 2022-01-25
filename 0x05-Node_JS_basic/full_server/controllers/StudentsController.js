import { argv } from 'process';
import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    response.set('Content-Type', 'text/plain');
    readDatabase(argv[2]).then((result) => {
      response.status(200);
      response.write('This is the list of our students\n');
      const orderedKey = Object.keys(result);
      orderedKey.sort();
      orderedKey.forEach((key) => {
        response.write(`Number of students in ${key}: ${result[key].length}. List: ${result[key].join(', ')}\n`);
      });
      response.end();
    }).catch(() => {
      response.status(500).end('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    response.set('Content-Type', 'text/plain');
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).end('Major parameter must be CS or SWE');
    } else {
      readDatabase(argv[2]).then((result) => {
        response.status(200);
        response.end(`List: ${result[major].join(', ')}`);
      }).catch(() => {
        response.status(500).end('Cannot load the database');
      });
    }
  }
}
