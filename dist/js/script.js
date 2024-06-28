const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

const links = document.querySelectorAll('.nav-item a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('ativo');
    document.querySelector('.nav-menu').classList.remove('ativo');
  });
});
