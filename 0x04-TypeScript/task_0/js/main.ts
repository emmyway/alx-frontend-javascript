interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std1: Student = {
  firstName: Emmanuel,
  lastName: Beyond,
  age: 15,
  location: Nigeria
}

const std2: Student = {
  firstName: Jonah,
  lastName: Beyond,
  age: 20,
  location: Nigeria
}

// Create an array containing the two students
const studentlist: Student[] = [std1, std2];


// Function to render a table with student data
function renderTable(students: Student[]): void {
  // Create a table and a tbody
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  // Append the table body to the table
  table.appendChild(tbody);

  // Iterate over the students array and create rows
  students.forEach(student => {
    const row = document.createElement('tr');

    // Create cells for firstName and location
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the tbody
    tbody.appendChild(row);
  });

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
