const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something!')
  } else {
    // create li and pass value then append as child 
    let li = document.createElement('li');
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    // add a cross for each li
    let span = document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);
  }
  // clear the input box
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener('click',(e)=>{
  if (e.target.tagName === 'LI') {
    // click the li, it will switch between checked and unchecked
    // exist -> remove, inexist -> add
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    // click the cross, li and span will be removed
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

// keep data after refreshing
showTask();