const settings = document.getElementById("settings");
const size_min = document.getElementById("size_min");
const size_max = document.getElementById("size_max");
const time_min = document.getElementById("time_min");
const time_max = document.getElementById("time_max");
const ball_preview = document.getElementById("ball_preview");
const catch_me_prev_min = document.getElementById("catch_me_prev_min");
const catch_me_prev_max = document.getElementById("catch_me_prev_max");

const catch_me = document.getElementById("catch_me");
const menu = document.getElementById("menu");
const score = document.getElementById("score");
const length = document.getElementById("length");
let run = true;
let cnt = 0;
let res = 0;
let sum = 0;
let len;


window.addEventListener("DOMContentLoaded", () => {
    resetSett();
    showMenu();
    // showSettings();
});

function showSettings() {
    menu.style.display = "none";
    settings.style.display = "flex";
    intervalId = setInterval(prev_look, 100);
}


function showMenu() {
    menu.style.display = "flex";
    settings.style.display = "none";
    clearInterval(intervalId);
}


function prev_look() {
    let min_size = size_min.value;
    let max_size = size_max.value;
    catch_me_prev_min.style.width = min_size * 10 + "px";
    catch_me_prev_min.style.height = min_size * 10 + "px";
    catch_me_prev_max.style.width = max_size * 10 + "px";
    catch_me_prev_max.style.height = max_size * 10 + "px";
}


function resetSett() {
    length.value = 10;
    time_min.value = 0.5;
    time_max.value = 3;
    size_min.value = 1;
    size_max.value = 4;
}

function startGame() {
    cnt = 0;
    sum = 0;
    len = length.value;
    menu.style.display = "none";
    play();
}

function play() {
    if (cnt < len) {
        // let duration = Math.random() * 3 + 0.5;
        let duration = Math.random() * (parseInt(time_max.value) - parseInt(time_min.value)) + parseInt(time_min.value);
        setTimeout(display, duration * 1000);
        cnt += 1;
    } else {
        res = sum / cnt / 1000;
        score.textContent = res.toFixed(3);
        menu.style.display = "flex";
    }
}

let start;
let size;
let x;
let y;

function display() {
    start = Date.now();
    size = Math.random() * (parseInt(size_max.value) - parseInt(size_min.value)) + parseInt(size_min.value);
    x = Math.random() * (window.innerHeight - size * 10);
    y = Math.random() * (window.innerWidth - size * 10);
    catch_me.style.width = size * 10 + "px";
    catch_me.style.height = size * 10 + "px";
    catch_me.style.top = x + "px";
    catch_me.style.left = y + "px";
    catch_me.style.visibility = "visible";
    run = true;
    window.addEventListener("keydown", () => {
        if (run) {
            // window.alert(`${Date.now()}, ${start}, ${Date.now()-start}`)
            console.log(Date.now() - start);
            sum += Date.now() - start;
            run = false;
            catch_me.style.visibility = "hidden";
            play();
        }
    })

}
