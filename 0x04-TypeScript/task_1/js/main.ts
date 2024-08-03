interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [property: string]: string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}


// fxn accepts two arguments and return string
function printTeacher (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`
}

interface printTeacherFunction: string {
  firstName: string;
  lastName: string;
}
