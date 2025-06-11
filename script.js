// const addBtn = document.getElementById('addBtn');
// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');

// addBtn.addEventListener('click', function () {
//   const taskText = taskInput.value.trim();

//   if (taskText === '') {
//     alert('Please enter a task!');
//     return;
//   }

//   const li = document.createElement('li');
//   li.innerHTML = `
//     ${taskText}
//     <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>
//   `;

//   taskList.appendChild(li);
//   taskInput.value = '';

//   li.querySelector('.delete-btn').addEventListener('click', function () {
//     taskList.removeChild(li);
//   });
// });

let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');
function addTodo() {
  let todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('Please enter a task!');
    return;
  }

  let li = document.createElement('li');
  li.innerHTML = `
    ${todoText}
    <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>
  `;

  todoList.appendChild(li);
  todoInput.value = '';
  saveData()


  li.querySelector('.delete-btn').addEventListener('click', function () {
    todoList.removeChild(li);
  });
}
 todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (
    e.target.classList.contains("delete-btn") ||
    e.target.closest(".delete-btn")
  ) {
    const li = e.target.closest("li");
    if (li) {
      li.remove();
      saveData();
    }
  }
});


function saveData() {
  localStorage.setItem('todoList', todoList.innerHTML);
}

function loadData() {
  let savedList = localStorage.getItem('todoList');
  if (savedList) {
    todoList.innerHTML = savedList;
  }
}

loadData()