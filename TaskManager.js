class TaskManager {
    constructor(currentId = 0) {
        this.currentId = currentId,
        this.tasks = []        
    }
    
    storeValue(name, description, assignedTo, dueDate, status) {
        const newTask = {
            currentId: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        }
        this.tasks.push({name: 'bhuvana', description: 'testdes',assignedTo: 'assignedTo', dueDate:'dueDate',status :'status'}) 
    } 
};

let myName = document.getElementById("name").value;
let myDescription = document.getElementById("description").value;
let myAssignedTo = document.getElementById("formAssigned").value;
let myDueDate = document.getElementById("date").value;
let myStatus = document.getElementById("status").value;

const homeworkTask = new TaskManager();

homeworkTask.storeValue(myName, myDescription, myAssignedTo, myDueDate, myStatus);

console.log(homeworkTask.storeValue);

listalltodo = () =>{
    let lineItem = "";
    this.tasks.forEach(mylist);
  
    document.getElementById("myToDoList").innerHTML = lineItem;
  
    function mylist(item, index) {
     
     lineItem += '<div class="todo-box"><h5 class="card-title">'+item.name+'</h5><p class="card-text">Creating Task Name: New task<br> '+ item.description+' <br>Assigned to:'+ item.assignedTo+'<br>Date: 19/06/2022<br>Status: '+ item.status+'</p></div>';
}};

console.log(tasks);