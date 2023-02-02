// Your assignment is to make the application better in UI
// You have to improve or generalize common code
// Whosoever does the best changes by monday
// I will continue on their applicaiton and we will learn drag and drop event

let taskList = [];
let taskListCopy=  []; 
let newTask = {};  

function addTask(event) {
    let taskItem = document.getElementById('taskItem');
    event.preventDefault();

    if (taskItem.value.length > 0) {
        newTask.title = taskItem.value;
        let modifiedTask =  JSON.parse(JSON.stringify(newTask)) 
        taskList.push(modifiedTask); 
        taskListCopy = JSON.parse(JSON.stringify(taskList));
        taskItem.value = "";
        console.log(taskList);
        showList();
    } else {
        alert("Please enter a value, to add!");
    }
    
}

function selectPriority(event) {
    newTask.priority = event.target.value;
}

function showList() {
    let listContainer = document.getElementById('list');
    listContainer.innerHTML = ""; 
    for (let i = 0 ; i < taskList.length ; i++ ) {
        let listItem = document.createElement('li');
        let pTitle = document.createElement("p");

        pTitle.textContent = taskList[i].title;
        Object.assign(
            pTitle.style,{
            fontSize: "24px",
            margin: "2px",
            fontWeight: "bold",
            color: "black",
        });

        listItem.appendChild(pTitle);

        let pPriority = document.createElement('p');
        pPriority.setAttribute("id", "priority");
        pPriority.textContent = taskList[i].priority;

        listItem.appendChild(pPriority);

        if (taskList[i].priority === "low") {
            listItem.style.background = "#eee8aa";
            listItem.style.color = "black";
            pPriority.style.backgroundColor = "yellow";
        } else {
            pPriority.style.backgroundColor = "red";
        }

        let p = document.createElement('p');
        p.setAttribute("id", taskList[i].title);
        p.textContent = taskList[i].completionDate;

        listItem.appendChild(p);
        listContainer.appendChild(listItem);
    }
}

function setDate(event) {
    newTask.completionDate = event.target.value;
}

function searchTasks() {
    let searchKeyword= document.getElementById('search-input');
    console.log(searchKeyword.value);

    taskList = taskListCopy; 

    let modifiedTaskList = taskList.filter((task) => {
        if (task.title.includes(searchKeyword.value)) {
            return true;
        }
    })

    taskList = modifiedTaskList;

    showList();
}