//selectores

const table = document.querySelector(".table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

window.addEventListener("DOMContentLoaded", () => {
  createThead();
  table.appendChild(tbody);
  createContentTable();
});

function createThead() {
  const tr = document.createElement("tr");
  thead.appendChild(tr);

  for (let index = 0; index < 12; index++) {
    const th = document.createElement("th");
    th.textContent = "Round " + index;
    tr.appendChild(th);
  }

  tr.firstChild.textContent = "Player";
  tr.lastChild.textContent = "Total points";
  table.appendChild(thead);
}

function createContentTable() {
  const tr = document.createElement("tr");

  tbody.appendChild(tr);

  for (let index = 0; index < 12; index++) {
    const td = document.createElement("td");
    if (index == 0) {
      td.textContent = "Player";
      tr.appendChild(td);
      continue;
    }
    const inputNumber = document.createElement("input");
    inputNumber.classList.add("inputNumber");
    inputNumber.setAttribute("type", "number");
    td.appendChild(inputNumber);
    td.classList.add("tdTable");

    inputNumber.addEventListener("input", () => {
      tr.lastChild.textContent= sumPoints(tr);
    });
    tr.appendChild(td);
  }

  const tdTable = document.querySelector(".tdTable");
}

function sumPoints(tr) {
  let result = 0;
  for (let index = 1; index <= 10; index++) {
    result += Number(tr.childNodes[index].firstChild.value);
  }
  return result;
}
