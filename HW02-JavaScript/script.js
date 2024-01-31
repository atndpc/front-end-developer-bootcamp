function showList() {
    const title = document.getElementById("divList");

    if (title.classList.contains("hidden")) {
        title.classList.remove("hidden");
    } else {
    }
}
function hideList() {
    const title = document.getElementById("divList");

    if (title.classList.contains("hidden")) {
    } else {
        title.classList.add("hidden");
    }
}
function addItem() {
    const text = document.getElementById("textInput").value
    const myList = document.getElementById("list")
    let newElement = document.createElement("li")
    if (text !== "") {
        newElement.innerHTML = text
        myList.appendChild(newElement)
        document.getElementById("textInput").value = ""
    } else {
        alert("Please enter item")
        document.getElementById("textInput").focus()
    }
}

function removeItem() {
    const myList = document.getElementById("list")
    myList.removeChild(myList.lastElementChild)
}

function clearList() {
    const myList = document.getElementById("list")
    myList.innerHTML = ""
}

const addButton = document.getElementById("addButton")
addButton.addEventListener("click", addItem)
const removeButton = document.getElementById("removeButton")
removeButton.addEventListener("click", removeItem)
const clearButton = document.getElementById("clearButton")
clearButton.addEventListener("click", clearList)
