const textInput = document.getElementById('text-field');
const addTaskBtn = document.getElementById('AddBtn');
const taskContainer = document.getElementById('task-container');
const progressbar = document.getElementById('progress');

progressbar.style.display = 'none';
let done_task_count = 0;
let total_tasks = 0;

taskContainer.addEventListener('click', (e) => {
  let taskId = e.target.parentNode.parentNode.id;
  if (taskId != 'workspace')
    if (e.target.id == 'del') {
      document.getElementById(taskId).style.display = 'none';
      total_tasks--;
    }

    if (e.target.id == 'done') {
      document.getElementById(taskId).style.display = 'none';
      done_task_count++;
      if (done_task_count == total_tasks){
        const image = document.createElement('img');
        image.className = 'greet';
        image.src = 'images/greet.jpeg';
        const workspace = document.getElementById('workspace');
        workspace.appendChild(image);
      }
      progressbar.style.width = `${done_task_count*100/(total_tasks)}%`;
      progressbar.style.display = 'flex';
    }
});
textInput.addEventListener('keyup', (e) =>{
  if (e.key == 'Enter')
    add_task();
})

addTaskBtn.addEventListener('click',add_task);

function add_task(){
  let text = textInput.value;
  if (total_tasks == done_task_count){
    total_tasks = 0;
    done_task_count = 0;
    progressbar.style.display = 'none';
    const workspace = document.getElementById('workspace');
    try {workspace.removeChild(document.getElementsByClassName('greet')[0]);}
    catch {};
  }

  if (done_task_count == 0 || done_task_count == total_tasks){
    if (text.length > 200 || text.length < 3){
      alert('task length should be between 3 and 200');
      textInput.value = null;
    }else{
      textInput.value = null;
      total_tasks++;

      const task = document.createElement('div');
      task.className = 'task';
      task.id = `${Math.random()}`;

      const para = document.createElement('p');
      para.id = 'text';
      para.innerHTML = text;

      const icons_div = document.createElement('div');
      icons_div.className = 'icons';

      const delbtn = document.createElement('div');
      delbtn.className = 'btn';
      delbtn.id = 'del';
      delbtn.innerHTML = 'Delete';

      const donebtn = document.createElement('div');
      donebtn.className = 'btn';
      donebtn.id = 'done';
      donebtn.innerHTML = 'Done';

      icons_div.appendChild(delbtn);
      icons_div.appendChild(donebtn);

      task.appendChild(para);
      task.appendChild(icons_div);

      taskContainer.appendChild(task);
    
    }
  }else{
    alert('complete remaining tasks first!')
  }
}

                // <div class="task" id = '1'>
                //     <p id = "text"> This is a sample task.</p>
                //     <div class = 'icons'>
                //         <div class ="btn" id = 'del'>Delete</div>
                //         <div class ="btn" id = 'done'>Done</div>
                //     </div>
                // </div>