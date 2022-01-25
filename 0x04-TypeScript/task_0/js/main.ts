export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: "student 1",
  lastName: "student 1 lastname",
  age: 21,
  location: "somewhere interesting",
}

const stud2: Student = {
  firstName: "student 2",
  lastName: "student 2 lastname",
  age: 22,
  location: "somewhere uninteresting",
}

const studentsList: Student[] = [stud1, stud2];

console.log("FirstName\t\tLocation");
for (let i = 0; i < studentsList.length; i++) {
  console.log(studentsList[i].firstName + "\t\t" + studentsList[i].location);
}
