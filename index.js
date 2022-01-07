
/* LIGHT / DARK MODE */
const root = document.querySelector(':root');
function darkMode(){
    root.style.setProperty('--background-color', 'hsl(var(--hue), 16%, 8%)');
    root.style.setProperty('--font-color', 'hsl(var(--hue), 0%, 100%)');
    root.style.setProperty('--icons-color', 'hsl(var(--hue), 0%, 100%)');
}
function lightMode(){
    root.style.setProperty('--background-color', 'hsl(var(--hue), 0%, 100%)');
    root.style.setProperty('--font-color', 'hsl(var(--hue), 16%, 8%)');
    root.style.setProperty('--icons-color', 'hsl(var(--hue), 16%, 8%)');
}

var lastMode;
window.onload = function(){
    lastMode = localStorage.getItem('mode');
    
    if(JSON.parse(lastMode)=="light"){
        lightMode();
    } else {
        darkMode();
    }
}

const cssEstilos = getComputedStyle(root);
var BgColor;
function changeMode(){
    BgColor = String(cssEstilos.getPropertyValue('--background-color')).trim();
    hue = String(cssEstilos.getPropertyValue('--hue')).trim();

    if(BgColor == "hsl( "+hue+", 16%, 8%)") {
        lightMode();
        localStorage.setItem('mode', JSON.stringify("light"));
    } else if (BgColor == "hsl( "+hue+", 0%, 100%)"){  
        darkMode();
        localStorage.setItem('mode', JSON.stringify("dark"));
    }
}

/* SIDE BAR */
const sidebar = document.getElementById('side-bar');

function toggleSidebar(){
    sidebar.classList.toggle('active');
}


/* HOME */
const check_1 = document.getElementById('check-2'); /* i really dont know why they are backwards */
const check_2 = document.getElementById('check-1');
check_1.classList.add('checked');
const image_1 = document.getElementById('slide-1');
const image_2 = document.getElementById('slide-2');

function ImageOne(){
    check_1.classList.add('checked');
    check_2.classList.remove('checked');
    image_1.style.right = "0%";
    image_2.style.left = "100%";
}
function ImageTwo(){
    check_2.classList.add('checked');
    check_1.classList.remove('checked');
    image_1.style.right = "100%";
    image_2.style.left = "0%";
}
