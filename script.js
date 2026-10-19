const darkMode = document.getElementById('theme-toggle');
const body = document.querySelector('body');

darkMode.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');
});

const menuButton = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});