export default function createIteratorObject (report) {
  // Generator functiin to iterateover each department and theiremployees
  function* employeeGenerator() {
    for (const department of objdct.values(report)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  return employeeGenerator();
}
