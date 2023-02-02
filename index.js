todoList();
var todoTextval = document.getElementById("todo-text");
var addButton = document.getElementById("addButton");
var ul = document.getElementById("ullist");

addButton.addEventListener('click', () => {
   //  let textNode = document.createTextNode(todoText.value);
   todoText = todoTextval.value;
   let taskTodo = localStorage.getItem('todo');
   if (todoText === "") {
      alert("please enter your task");
   } else if (todolistArray.includes(todoText)) {
      alert("this task is already exist");
   }

   else {
      if (taskTodo === null) {
         todolistArray = [];
      } else {
         todolistArray = JSON.parse(taskTodo)
      }
      todolistArray.push(todoText);
      localStorage.setItem('todo', JSON.stringify(todolistArray));
      todoList();
      todoTextval.value = "";
   }
});


function todoList() {
   let taskTodo = localStorage.getItem('todo');
   if (taskTodo === null) {
      todolistArray = [];
   } else {
      todolistArray = JSON.parse(taskTodo);

   }
   var ul = document.getElementById("ullist");
   ul.innerHTML = "";
   todolistArray.forEach((data, index) => {
      let list = document.createElement("li");
      list.className = "listItem";
      let span = document.createElement("span");
      span.innerHTML = data;
      span.className = "userData";
      span.addEventListener('click', (e) => {
         e.target.classList.toggle('done');
      })
      let hide_btn = document.createElement("input");
      hide_btn.classList.add("hide");
      let editTask = document.createElement("button");
      editTask.classList.add("edit");
      editTask.innerText = "Edit";
      let edit_alert = document.createElement("div");
      edit_alert.classList = "alertbox";
      let alert = document.createElement("div");
      alert.classList = "alert";
      let close_alert = document.createElement("div");
      close_alert.classList = "closeBox";
      var update_btn = document.createElement("button");
      update_btn.classList.add('update_btn');
      update_btn.innerText = "Update";
      let spanclose = document.createElement("button");
      spanclose.className = "close";
      spanclose.innerText = "Delete";
      spanclose.setAttribute('onclick', 'removeTask(' + index + ')');
      list.appendChild(span);
      list.appendChild(editTask);
      list.appendChild(update_btn);
      list.appendChild(spanclose);
      list.appendChild(hide_btn);
      ul.appendChild(list);
      // displayAll.appendChild(ul);
   });

}

const editmodel = () => {
   document.getElementByClassName("edit").style.display = "block";
}

function removeTask(index) {
   let todolistItem = JSON.parse(localStorage.getItem('todo'));
   todolistItem.splice(index, 1);
   localStorage.setItem('todo', JSON.stringify(todolistItem))
   todoList();
}
let selectedUser = null;
const edit = (event) => {
   let doapp = JSON.parse(localStorage.getItem('todo'));
   var edit_function = document.getElementByClassName("alertbox");

   doapp.find((data) => {
      selectedUser = event.target.id;
      if (event.target.id == data.id) {
         edit_function.value = data.todoText;
      }
      editmodel();
   })

}
