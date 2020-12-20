const taskField = document.getElementById('task-field');
const addTaskBtn = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const progress = document.getElementsByClassName('ProgressBar');

addTaskBtn.disabled = true;
var increment = 0;
var delete_count = 0;
var active_tasks_count = 0;
var done_tasks_count = 0;

taskField.addEventListener('keyup', (e) =>{
  let text = e.target.value;
  if(!text || text.length < 2){
    addTaskBtn.disabled = true;
  }else{
    addTaskBtn.disabled = false;
  }
});

addTaskBtn.addEventListener('click', add_task);

function get_icons(name){
  let i = document.createElement('i');
  i.className = 'material-icons';
  i.innerHTML = name;
  if (name == 'delete')
    i.title = 'Delete this task';
  else if (name == 'create')
    i.title = 'Edit this task';
  else 
    i.title = 'Mark as done';
  return i;
}

function add_task(){
  var text = taskField.value;
  let taskdiv = document.createElement('div');
  taskdiv.className = 'task';
  taskdiv.id = `${taskContainer.childElementCount}`;
  let text_area = document.createTextNode(text);
  let icons_div = document.createElement('div');
  let edit_i = get_icons('create');
  let done_i = get_icons('check');

  icons_div.appendChild(edit_i);
  icons_div.appendChild(done_i);
  taskdiv.appendChild(text_area);
  taskdiv.appendChild(icons_div);
  taskContainer.appendChild(taskdiv);
  active_tasks_count++;
  console.log(active_tasks_count);
}

taskContainer.addEventListener('click', e => {
  let id = e.target.parentNode.parentNode.id;
  if (e.target.innerHTML == 'create')
    edit_task(id);
  else if (e.target.innerHTML == 'delete')
    delete_task(id);
  else if(e.target.innerHTML == 'check')
    mark_done(id);
})

function delete_task(id){
  var task = document.getElementById(id);
  task.style.display = 'none';
  delete_count++;
  active_tasks_count--;
  console.log(active_tasks_count);
}

function mark_done(id){
  var task = document.getElementById(id);
  task.style.display = 'none';
  done_tasks_count++;
  active_tasks_count--;
  console.log(active_tasks_count);
}

function edit(id){
  
}
