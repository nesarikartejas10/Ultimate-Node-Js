function fetchStudentData(studId) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Fetching student data from database...");
      if (studId) {
        resolve({
          id: studId,
          name: "Tejas",
          enrollNo: 5951,
        });
      } else {
        reject(
          new Error("Error occurs fetching student data from database...")
        );
      }
    }, 3000)
  );
}

function getResult(enrollment) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching student result from database...");
      if (enrollment) {
        resolve({ resultId: enrollment, percentage: 70 });
      } else {
        reject(new Error("Error occurs fetching student result"));
      }
    }, 2000);
  });
}

fetchStudentData(51)
  .then((student) => getResult(student.enrollNo))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
