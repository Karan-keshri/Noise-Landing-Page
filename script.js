//let darkmode=document.querySelector('darkmode');
let darkmode=document.getElementById('darkmode');
darkmode.onclick=()=>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bxs-sun');
        document.body.classList.add('color');
    }
    else{
        darkmode.classList.replace('bxs-sun','bx-moon');
        document.body.classList.remove('color');
    }
};


let menu=document.getElementById('menu-icon');
let navlist=document.getElementById('navlists');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// let menu=document.querySelector('#menu-icon');
// let navlist=document.querySelector('.navlist');

// menu.onclick=()=>{
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle('open');
// }
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}