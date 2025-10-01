let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let header = document.getElementById("header");
let introducao = document.getElementById("introducao");
let resumo = document.getElementById("resumo");
let experiencia = document.getElementById("experiencia");
let formacao = document.getElementById("formacao");
let contato = document.getElementById("contato");

let titulo = document.getElementsByClassName("h1");

let tema = false;
trilho.addEventListener("click", () => {
  tema = !tema;
  localStorage.setItem("dark", tema);
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  resumo.classList.toggle("dark");
  introducao.classList.toggle("dark");
  formacao.classList.toggle("dark");

  experiencia.classList.toggle("light");
  contato.classList.toggle("light");
});

if (tema) {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  resumo.classList.toggle("dark");
  introducao.classList.toggle("dark");
  formacao.classList.toggle("dark");

  experiencia.classList.toggle("light");
  contato.classList.toggle("light");
}
