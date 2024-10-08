const add_text = document.getElementById("add_text");
const tasks = document.getElementById("tasks");


function add_to_list(){
    if (add_text.value !== ""){
        let task = document.createElement("li");
        let label = document.createElement("label");
        let input = document.createElement("input");
        let checkmark = document.createElement("span");
        let text_task = document.createElement("span");
        let del_task = document.createElement("span");
        task.classList.add("task");

        input.classList.add("task_chk");
        input.type = "checkbox";

        checkmark.classList.add("checkmark");
        text_task.classList.add("text_task");
        text_task.textContent = add_text.value;

        label.appendChild(input);
        label.appendChild(checkmark);
        label.appendChild(text_task);
        task.appendChild(label);

        del_task.classList.add("del_task");
        del_task.textContent = "✖";
        del_task.onclick = del_from_list;
        task.appendChild(del_task);

        tasks.appendChild(task);

        add_text.value = "";
    }
    else{
        window.alert("Empty input!")
    }
}

function del_from_list() {
    this.parentElement.remove();
}