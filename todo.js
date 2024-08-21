const list = []

function toDo1 () {
  list.push(document.getElementById('todo1__input').value);
  console.log(list)

  document.getElementById('todo1__input').value = ''
}

// -------------------------------------------------------------------------------------------------

const list2 = []

function toDo2 () {
  list2.push(document.getElementById('todo2__input').value);
  let toDo = document.createElement('li')
  toDo.textContent = document.getElementById('todo2__input').value
  document.getElementById('todos').appendChild(toDo)
  console.log(list2)

  document.getElementById('todo2__input').value = ''
}

// -------------------------------------------------------------------------------------------------

const list3 = [];


function toDo3 () {
  const toDoContainer = document.getElementById('js-toDo3')

  let userInput = document.getElementById('todo3__input').value;

  let dateInput = document.getElementById('js-dateInput').value;
  
  const listContainer = document.createElement('div');
  listContainer.setAttribute('class', 'todo3__listContainer');
  toDoContainer.appendChild(listContainer);

  const toDoList = document.createElement('ul');
  toDoList.setAttribute('class', 'todo-list')
  listContainer.appendChild(toDoList);

  const listItems = document.createElement('li');
  listItems.textContent = userInput;
  toDoList.appendChild(listItems)

  const dateContainer = document.createElement('div')
  dateContainer.setAttribute('class', 'date-container')
  listContainer.appendChild(dateContainer)

  const dateList = document.createElement('p');
  dateList.textContent = dateInput
  dateContainer.appendChild(dateList)
  document.getElementById('todo3__input').value = ''

  list3.push(toDoList)

  const deleteButton = document.createElement('button')
  deleteButton.setAttribute('class', 'todo3__deleteButton');
  deleteButton.addEventListener('click', function () {
    listContainer.remove()
  })
  deleteButton.textContent = 'Delete'
  dateContainer.appendChild(deleteButton);
}



