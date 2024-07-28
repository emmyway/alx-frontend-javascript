export default function createReportObject (employeesList) {
  return {
	  allEmployees: { ...employeeslist }, // spreed the employeeList object into  allEmployee
	  getNumberofDepartments () { // ES6 method property syntax
      return Object.keys(this.allEmployees).legth;
	  }
  };
}
