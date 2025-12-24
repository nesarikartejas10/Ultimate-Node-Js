function fetchStudentData(studId, callback) {
  setTimeout(() => {
    console.log("Fetching student data from database...");
    callback({
      id: studId,
      name: "Tejas",
      enrollNo: 5951,
    });
  }, 3000);
}

function getResult(enrollment, callback) {
  setTimeout(() => {
    console.log("Fetching student result from database...");
    callback({ resultId: enrollment, percentage: 70 });
  }, 2000);
}

const printStudent = (student) => {
  console.log("student", student);
  getResult(student.enrollNo, printResult);
};

const printResult = (result) => {
  console.log("Result", result);
};

fetchStudentData(51, printStudent);
