var list = document.getElementById('stack-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');
var btnRemove = document.getElementById('remove-item');
var btnPeek = document.getElementById('peek-item');
var btnSize = document.getElementById('size-item');
var currentInputValue = '';

inputBox.addEventListener('input', function(e) {
  currentInputValue = e.target.value;
});

btnAdd.addEventListener('click', function() {
  if (list.childElementCount === 8) {
    alert('Stack is full');
  } else {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode(currentInputValue);
    newListElement.appendChild(textNode);
    newListElement.id = "stack-element";
    var firstItem = list.firstElementChild;
    list.insertBefore(newListElement, firstItem);
    
    inputBox.value = '';
  }
});

btnRemove.addEventListener('click', function() {
  if (list.childElementCount === 0) {
    alert('Stack is empty');
  } else {
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement);
  }
});

btnPeek.addEventListener('click', function() {
  if (list.childElementCount === 0) {
    alert('Stack is empty');
  } else {
    var topElement = list.firstElementChild.textContent;
    alert('Top Element: ' + topElement);
  }
});

btnSize.addEventListener('click', function() {
  var stackSize = list.childElementCount;
  alert('Stack Size: ' + stackSize);
});
