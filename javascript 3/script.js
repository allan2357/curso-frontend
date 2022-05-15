const formulario = document.getElementById("formulario");
const campos = document.querySelectorAll("#formulario input");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const cep = document.getElementById("cep");
const uf = document.getElementById("uf");
const obrigatorios = document.querySelectorAll(".obrigatorio");

function validaEmail(element) {
  element.addEventListener("change", function (event) {
    event.preventDefault();
    if (!this.value.match(/[a-z0-9]+@+[a-z0-9]+\.+[a-z]+(\.[a-z]+)?$/i)) {
      this.classList.add("error");
      console.log("erro");
    } else {
      this.classList.remove("error");
    }
  });
}

function validaTelefone(element) {
  element.addEventListener("change", function (event) {
    event.preventDefault();
    if (!this.value.match(/^[0-9 \-\(\)]+$/i)) {
      this.classList.add("error");
    } else {
      this.classList.remove("error");
    }
  });
}

function validaTexto(element) {
  element.addEventListener("change", function (event) {
    event.preventDefault();
    if (!this.value.match(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)) {
      this.classList.add("error");
    } else {
      this.classList.remove("error");
    }
  });
}

function validaCep(element) {
  element.addEventListener("change", function (event) {
    event.preventDefault();
    if (!this.value.match(/[0-9]{5}-[0-9]{3}/)) {
      this.classList.add("error");
    } else {
      this.classList.remove("error");
    }
  });
}

function validaUf(element) {
  element.addEventListener("change", function (event) {
    event.preventDefault();
    if (!this.value.match(/[a-z]{2}/i)) {
      this.classList.add("error");
    } else {
      this.classList.remove("error");
    }
  });
}

function validaObrigatorios(obrigatorios) {
  for (let campo of obrigatorios) {
    campo.addEventListener("focusout", function (event) {
      event.preventDefault();
      if (campo.value == "") {
        campo.classList.add("error");
      }
    });
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let erro = false;
  for (let child of campos) {
    if (child.classList.contains("obrigatorio") && child.value == "") {
      child.classList.add("error");
      erro = true;
    }
  }
  if ((erro = true)) return;
});

validaEmail(email);
validaTelefone(telefone);
validaTexto(nome);
validaTexto(cidade);
validaCep(cep);
validaUf(uf);
validaObrigatorios(obrigatorios);
