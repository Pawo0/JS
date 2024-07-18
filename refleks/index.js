const settings = document.getElementById("settings");
const size_min = document.getElementById("size_min");
const size_max = document.getElementById("size_max");
const time_min = document.getElementById("time_min");
const time_max = document.getElementById("time_max");


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
    menu.style.display = "flex";
});

function showSettings() {
    menu.style.display = "none";
    settings.style.display = "flex";
}

function showMenu() {
    menu.style.display = "flex";
    settings.style.display = "none";
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
        let duration = Math.random() * (time_max.value - time_min.value) + time_min.value;
        setTimeout(display, duration * 1000);
        cnt += 1;
    } else {
        res = sum / cnt / 1000;
        score.textContent = res;
        menu.style.display = "flex";
    }
}

let start;
let size;
let x;
let y;

function display() {
    start = Date.now();
    size = Math.random() * (size_max.value - size_min.value) + size_min.value;
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
