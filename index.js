/* SIDE BAR */
const sidebar = document.getElementById('side-bar');

function toggleSidebar(){
    sidebar.classList.toggle('active');
}

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







/* LIGHT / DARK MODE */
function changeMode(){
    alert('change mode');
}