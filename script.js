const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
}
showTasks();

addBtn.onclick = () => {
  let userData = inputBox.value;
  let getToLocalStorage = localStorage.getItem("New Todo");
  if(getToLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getToLocalStorage);
  }
  listArr.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
  addBtn.classList.remove("active");
}

function showTasks() {
  let getToLocalStorage = localStorage.getItem("New Todo");
  if(getToLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getToLocalStorage);
  }
  const pendingNumb = document.querySelector(".pendingNumb");
  pendingNumb.textContent = listArr.length;
  if(listArr.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }
  let newLiTag = '';
  listArr.forEach((element, i) => {
    newLiTag += `<li> ${element} <span onclick="deleteTask(${i})"; ><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}

function deleteTask(i) {
  let getToLocalStorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getToLocalStorage);
  listArr.splice(i, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}

deleteAllBtn.onclick = () => {
  listArr = [];
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}
