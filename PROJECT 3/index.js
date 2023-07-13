let myLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

const tabBtn = document.getElementById("tab-btn");

const deleteBtn = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myLeads[i] +
    //   "'>" +
    //   myLeads[i] +
    //   "</a></li>";
    // template string below-replace initial and final double quotes with backtick and then use ${javascript value} for inserting javascript element
    // in template string we can break a sentence into multiple lines
    listItems += `
    <li>
      <a href="${leads[i]}" target="_blank">${leads[i]}
      </a>
    </li>
    `;
  }

  ulEl.innerHTML = listItems;
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  render(myLeads);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  console.log(localStorage.getItem("myLeads"));
  inputEl.value = "";
});
