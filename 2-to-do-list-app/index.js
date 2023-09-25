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
}

listContainer.addEventListener('click',(e)=>{
  if (e.target.tagName === 'LI') {
    // click the li, it will !!!
    e.target.classList.toggle('checked')
  } else if (e.target.tagName === 'SPAN') {
    // click the cross, li and span will be removed
    e.target.parentElement.remove();
  }
}, false);


