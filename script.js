const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write someting");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let spn = document.createElement("span");
    spn.innerHTML = "\u00d7";
    li.appendChild(spn);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

///Logic to display the tasks as it is if we reload the borwser or close it and again open it
function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();

//////////////////////////// Important note ////////////////////////////
// In the DOM (Document Object Model), the tagName property of an element always returns the uppercase version of the tag name, regardless of how the tag is written in the HTML code (uppercase, lowercase, or mixed case).
// This is why you should always compare e.target.tagName to the uppercase version of the tag name, such as "LI" or "SPAN".

// e.target: Refers to the specific element clicked within the listContainer
