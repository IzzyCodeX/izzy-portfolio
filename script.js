const darkMode = document.getElementById('theme-toggle');
const body = document.querySelector('body');

darkMode.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');
});
