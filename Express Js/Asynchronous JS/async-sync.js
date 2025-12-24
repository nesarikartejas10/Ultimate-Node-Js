console.log("Step-1:-start");

//blocking code
function fetchData() {
  for (let i = 1; i <= 1000000000; i++) {}
  console.log("Step-2:-data fetched...");
}

//non bloacking code
function getData() {
  setTimeout(() => {
    console.log("Step-3:-get data...");
  }, 5000);
}

fetchData();
getData();

console.log("Step-4:-start");
