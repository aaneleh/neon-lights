/********* LIGHT / DARK MODE *********/
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

/********* CHANGE MODE *********/
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
    } else{
        root.style.setProperty('--bright-color', '#ff00b7');
    }
}