let start = document.getElementById("btn1");
let stop = document.getElementById("btn2");
let reset = document.getElementById("btn3");
let screen = document.getElementById("screen");
let results = document.getElementById("list")

let flag = false;
let run;
let hours;
let minutes;
let seconds;
let milisec;
let time = new Date()
time.setTime(0)

function runTime(by){
    time.setTime(time.getTime() + by);
    hours = (time.getHours() - 1).toString().padStart(2,"0");
    minutes = time.getMinutes().toString().padStart(2,"0");
    seconds = time.getSeconds().toString().padStart(2,"0");
    milisec = time.getMilliseconds().toString().slice(0,2).padStart(2,"0");
    screen.textContent = `${hours}:${minutes}:${seconds}:${milisec}`
}

start.onclick = () =>{
    flag = true;
    run = setInterval(runTime,10,10);
}

stop.onclick = () =>{
    clearInterval(run);
    if (flag) results.innerHTML += `<li class="res">${screen.textContent} </li>`;
    flag = false;
}

reset.onclick = () =>{
    clearInterval(run);
    time.setTime(0);
    runTime(0);
    results.innerHTML = "";
}