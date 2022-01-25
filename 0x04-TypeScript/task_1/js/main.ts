export interface Teacher {
  readonly firstname: string;
  readonly lastname: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


export let printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
};

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName
  }
}
