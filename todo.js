document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
        alert('Please enter a task before adding!');
        return;
      }
  
      const newTaskItem = document.createElement('li');
      newTaskItem.innerHTML = `
        <span class="priority">Priority: <select><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></span>
        ${taskText}
        <button class="delete-btn">Delete</button>
      `;
  
      newTaskItem.addEventListener('click', function () {
        if (!newTaskItem.classList.contains('completed')) {
          newTaskItem.classList.add('completed');
        } else {
          newTaskItem.classList.remove('completed');
        }
      });
  
      const deleteBtn = newTaskItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function (event) {
        // Prevent the click event from propagating to the parent li
        event.stopPropagation();
        taskList.removeChild(newTaskItem);
      });
  
      taskList.appendChild(newTaskItem);
      taskInput.value = '';
    }
  
    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', addTask);
  });
  