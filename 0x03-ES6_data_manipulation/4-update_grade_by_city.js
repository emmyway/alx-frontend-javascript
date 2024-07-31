const updateStudentGradeByCity = (students, city, newGrades) => {
  // Check if the arguments are valid
  if (!Array.isArray(students) || !Array.isArray(newGrades) || typeof city !== 'string') {
    return [];
  }

  // Create a map of studentId to grade for quick lookup
  const gradesMap = newGrades.reduce((map, { studentId, grade }) => {
    map[studentId] = grade;
    return map;
  }, {});

  // Filter and map students by city
  return students
    .filter(student => student.location === city)
    .map(student => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradesMap[student.id] !== undefined ? gradesMap[student.id] : 'N/A'
    }));
};
