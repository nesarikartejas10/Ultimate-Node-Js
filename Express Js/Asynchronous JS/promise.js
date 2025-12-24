const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const student = {
      id: 1,
      name: "Tejas",
    };
    const status = true;
    if (status) {
      resolve(student);
    } else {
      reject(new Error("Error while getting student data..."));
    }
  }, 3000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
