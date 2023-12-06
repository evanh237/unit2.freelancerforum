const freelancers = [
  { name: "Alice", job: "Writer", price: 30 },
  { name: "Bob", job: "Teacher", price: 50 },
  { name: "Carol", job: "Programmer", price: 70 },
];

const priceValue = document.querySelector("#priceValue");

function createTableHeader(table) {
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Job", "Salary"];

  for (const header of headers) {
    const th = document.createElement("th");

    th.innerText = header;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);
}

function createTableBody(table, freelancers) {
  const tbody = document.createElement("tbody");
  for (const freelancer of freelancers) {
    const tableRow = document.createElement("tr");

    for (const key in freelancer) {
      const cell = document.createElement("td");
      cell.innerText = freelancer[key];
      tableRow.appendChild(cell);
    }
    tbody.appendChild(tableRow);
  }
  table.appendChild(tbody);
}

function appendTableToContainer(table) {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innertext = "Available Freelancers";
  root.appendChild(h2);
  root.appendChild(table);
}

function updateTableAndAverage(newFreelancer) {
  freelancers.push(newFreelancer);
  const table = document.createElement("table");
  createTableBody(table, freelancers);
  appendTableToContainer(table);
  calculateAverage(freelancers);
}

function addNewFreelancer() {
  const intervalId =
    (() => {
      const newFreelancer = {
        name: "Carol",
        job: "Programmer",
        price: 70,
      };
      updateTableAndAverage(newFreelancer);
    },
    3000);
  return intervalId;
}

function calculateAverage(freelancers) {
  const totalPrice = freelancers.reduce((prev, curr) => {
    const price = prev + curr.price;
    return price;
  }, 0);
  const averagePrice = totalPrice / freelancers.length;
  priceValue.innerText = Math.floor(averagePrice);
}

function render(initialState) {
  const table = document.createElement("table");
  createTableHeader(table);
  createTableBody(table, initialState);
  appendTableToContainer(table);
  calculateAverage(freelancers);
  addNewFreelancer();
}
const intervalId = addNewFreelancer();
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

render(freelancers);
