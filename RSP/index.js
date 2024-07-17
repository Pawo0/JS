const symbols = document.getElementsByClassName("sign")
const player_use = document.getElementById("player_use")
const comp_use = document.getElementById("comp_use")
const res = document.getElementById("result")
const player_scr = document.getElementById("player_scr")
const comp_scr = document.getElementById("comp_scr")
const draws = document.getElementById("draws")
const counter = document.getElementById("counter");

let sign = {0: "Rock", 1:"Scissors", 2:"Paper"};
let p_cnt = 0;
let c_cnt = 0;
let d_cnt = 0;
for (let i=0; i<symbols.length;i++){
    symbols[i].addEventListener("click",() =>{
        counter.style.visibility = "visible";
        let comp = Math.floor(Math.random()*3);
        player_use.textContent = sign[i];
        comp_use.textContent = sign[comp];
        if (i === comp){
            draw();
            d_cnt++;
        }
        else if (comp === ((i + 1) % 3)){
            win();
            p_cnt++;
        }
        else{
            lose();
            c_cnt++;
        }
        player_scr.textContent = p_cnt;
        comp_scr.textContent = c_cnt;
        draws.textContent = d_cnt;

    })
}

function win(){
    res.style.color = "green";
    res.textContent = "You won!";
}
function lose(){
    res.style.color = "red";
    res.textContent= "You lost!"
}
function draw(){
    res.style.color = "orange";
    res.textContent = "Draw!";
}