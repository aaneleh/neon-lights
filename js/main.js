/********* SIDE BAR *********/
const sidebar = document.getElementById('side-bar');

function toggleSidebar(){
    sidebar.classList.toggle('active');
}


/********* HOME *********/
const check_1 = document.getElementById('check-2'); /* i really dont know why they are backwards */
const check_2 = document.getElementById('check-1');
check_1.classList.add('checked');
const image_1 = document.getElementById('slide-1');
const image_2 = document.getElementById('slide-2');

function ImageOne(){
    check_1.classList.add('checked');
    check_2.classList.remove('checked');

    image_1.style.transform = "translateX(0vw)";
    image_2.style.transform = "translateX(+100vw)";

}
function ImageTwo(){
    check_2.classList.add('checked');
    check_1.classList.remove('checked');

    image_1.style.transform = "translateX(-100vw)";
    image_2.style.transform = "translateX(0vw)";
}


function autoSlide(){
    ImageOne();
    setTimeout(() => ImageTwo() , 3000);
}
autoSlide();

/********* CHANGE COLOR *********/
const color_input = document.getElementById('color-input');
function changeColor(){
    root.style.setProperty('--bright-color', color_input.value);
    localStorage.setItem('bright-color', JSON.stringify(color_input.value));
}


/********* RESET COLORS (dark mode and pink)*********/
function resetColor(){
    darkMode();
    localStorage.setItem('mode', JSON.stringify("dark"));

    root.style.setProperty('--bright-color', '#ff00b7');
    color_input.value = '#ff00b7';
    localStorage.setItem('bright-color', JSON.stringify('#ff00b7'));
}


/********* ON LOAD *********/
var lastMode;
var lastBrightColor;
window.onload = function(){
    lastMode = localStorage.getItem('mode');
    if(JSON.parse(lastMode)=="light"){
        lightMode();
    } else {
        darkMode();
    }

    lastBrightColor = localStorage.getItem('bright-color');
    if(lastBrightColor != null){
        root.style.setProperty('--bright-color', JSON.parse(lastBrightColor));
        color_input.value = JSON.parse(lastBrightColor);
    } else{
        root.style.setProperty('--bright-color', '#ff00b7');
    }
}
