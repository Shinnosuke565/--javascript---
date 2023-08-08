const tasks = [];

document.getElementById('addButton').addEventListener('click', () => {
  const taskName = document.getElementById('addTask').value;
  tasks.push({
    id: tasks.length,
    name: taskName,
    state: '作業中'
  });

  document.getElementById('addTask').value = '';

  displayTasks();
});

function displayTasks() {
  const tbody = document.querySelector('#todoTable tbody');
  tbody.innerHTML = '';

  tasks.forEach((task, index) => {
    const row = tbody.insertRow(-1);
    row.insertCell(-1).innerText = index;
    row.insertCell(-1).innerText = task.name;
    const stateCell = row.insertCell(-1);

    const stateButton = document.createElement('button');
    stateButton.innerText = task.state;
    stateCell.appendChild(stateButton);

    const toggleStatus = (task) => {
      if (task.state === '作業中') {
        task.state = '完了';
      } else if (task.state === '完了') {
        task.state = '作業中';
      }
      displayTasks();
    };

    const createDeleteButton = (index) => {
      const deleteButton = document.createElement('button');
      deleteButton.innerText = '削除';
      deleteButton.addEventListener('click', () => {
        deleteTask(index);
      });
      return deleteButton;
    };

    const deleteTasks = (index) => {
      tasks.splice(index, 1);
      tasks.forEach((task, index) => {
        task.id = index;
      });
      displayTasks();
    };
    const displayTasks = () => {
    };
  });
};
