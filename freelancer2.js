const freelancers = [
  { name: "Alice", job: "Writer", price: 30 },
  { name: "Bob", job: "Teacher", price: 50 },
  { name: "Carol", job: "Programmer", price: 70 },
];

function createTableHeader(table) {
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Job", "Salary"];

  for (let i = 0; i < headers.length; i++) {
    const th = document.createElement("th");
    const header = headers[i];
    th.innerText = header;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);
}
function createTableBody(table, freelancers) {
  const tbody = document.createElement("tbody");
  for (let i = 0; i < freelancers.length; i++) {
    const row = document.createElement("tr");
    const freelancer = freelancers[i];
    for (const key in freelancer) {
      const cell = document.createElement("td");
      cell.innerText = freelancer[key];
      row.appendChild(cell);
    }
  }
  tbody.appendChild(row);
  table.appendchild(tbody);
}

function appendTableToContainer(table) {
  const root = document.querySelector("#root");
  const h1 = document.createElement("h1");
  h1.innertext = "Freelancer Database";
  root.appendchild(h1);
  root.appendChild(table);
}

function render(initialState) {
  const table = document.createElement("table");
  createTableHeader(table);
  createTableBody(table, initialState);
  appendTableToContainer(table);
}

render(freelancers);
