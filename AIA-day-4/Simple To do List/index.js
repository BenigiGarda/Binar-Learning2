let descInputEle = document.querySelector(".descriptionInput");
let statusInputEle = document.querySelector(".statusInput");
let submitEle = document.querySelector(".add");
let tbody = document.getElementById("tbody");
let containerDiv = document.querySelector(".container");
let arrayOfTasks = [];

submitEle.onclick = function () {
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }
  if (descInputEle.value !== "" && statusInputEle !== "") {
    addTaskToArray(descInputEle.value, statusInputEle.value);
    descInputEle.value = "";
    statusInputEle.value = "";
  }
};

function addTaskToArray(descText, statusText) {
  const task = {
    title: descText,
    status: statusText,
  };
  arrayOfTasks.push(task);
  console.log(arrayOfTasks);
  addTaskToPage(arrayOfTasks);
}

function addTaskToPage(arrayOfTasks) {
  arrayOfTasks.forEach((task, index) => {
    tbody.innerHTML += `
    <tr>
    <td>${index + 1}</td>
    <td>${task.title}</td>
    <td>${task.status}</td>
    </tr>`;
    // let trElement = document.createElement("tr");
    // let noEle = document.createElement("td");
    // let descEle = document.createElement("td");
    // let statusEle = document.createElement("td");
    // noEle.innerHTML = index + 1;
    // descEle.innerHTML = task.title;
    // statusEle.innerHTML = task.status;
    // trElement.appendChild(noEle);
    // trElement.appendChild(descEle);
    // trElement.appendChild(statusEle);
    // tbody.appendChild(trElement);
  });
}
