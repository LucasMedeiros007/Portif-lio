let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let header = document.getElementById('header');
let introducao = document.getElementById('introducao');
let resumo = document.getElementById('resumo');
let experiencia = document.getElementById('experiencia');
let formacao = document.getElementById('formacao');
let contato = document.getElementById('contato');

let titulo = document.getElementsByClassName('h1');

let tema;
function theme() {
  // localStorage.setItem('tema', 'dark');
  trilho.classList.toggle('dark');
  body.classList.toggle('dark');
  header.classList.toggle('dark');
  resumo.classList.toggle('dark');
  formacao.classList.toggle('dark');

  experiencia.classList.toggle('light');
  contato.classList.toggle('light');
  introducao.classList.toggle('light');
}

let s = 0;
function verTheme() {
  if (localStorage.getItem('tema', 'dark') == 'dark') {
    localStorage.removeItem('tema');
    localStorage.setItem('tema', 'light');
  } else {
    localStorage.removeItem('tema');
    localStorage.setItem('tema', 'dark');
  }
}
if (localStorage.getItem('tema', 'dark') == 'dark') {
  s = 1;
  // localStorage.removeItem('tema');
  // localStorage.setItem('tema', 'light');
} else {
  s = 0;
}

trilho.addEventListener('click', theme);
trilho.addEventListener('click', verTheme);

// if (localStorage.getItem('tema', 'dark') == 'dark') {
// }

if (s == 1) {
  theme();
} else {
  localStorage.removeItem('tema');
  localStorage.setItem('tema', 'light');
}
