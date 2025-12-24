function fetchStudentData(studId) {
  setTimeout(() => {
    console.log("Fetching student data from database...");
    return {
      id: studId,
      name: "Tejas",
      enrollNo: 5951,
    };
  }, 3000);
}

const student = fetchStudentData(51);
console.log("student", student); //undefined
