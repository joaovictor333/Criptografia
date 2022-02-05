let TextoCriptografado = document.querySelector("#textarea1");
let resultado = document.querySelector("#textarea2");
let codificar = document.querySelector("#cripto");
let decodificar = document.querySelector("#descripto");
let copiar = document.querySelector("#Copiar");
const regex = new RegExp("^[a-z 0-9\b]");


codificar.addEventListener('click', (event) => {

  event.preventDefault();

  resultado.textContent = caracteres(codifica(TextoCriptografado.value));

  TextoCriptografado.value = "";
  codificar.innerHTML = "Criptografado"
})

decodificar.addEventListener('click', (event) => {

  event.preventDefault();

  resultado.textContent = caracteres(descodifica(TextoCriptografado.value));

  TextoCriptografado.value = "";
  decodificar.innerHTML = "Descriptografado"
})

copiar.addEventListener('click', (event) => {

  event.preventDefault();

  resultado.select();

  document.execCommand('copy');
  TextoCriptografado.value = ""
  copiar.innerHTML = "Copiado";
})

function codifica(TextoCriptografado) {

  let fraseCodificada = TextoCriptografado.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat").toLowerCase();

  return fraseCodificada;

}

function descodifica(TextoCriptografado) {

  let fraseDescodificada = TextoCriptografado.replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

  return fraseDescodificada;

}

function caracteres(TextoCriptografado) {

  if (!regex.test(TextoCriptografado)) {

      return ""
  }
  else {
      return  TextoCriptografado;

  }

}

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

/*function CopiarTexto(){
  const Copiar = document.querySelector(".copiar");
  Copiar.select();
  Copiar.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(Copiar.value);
  Copiar.value = "";
} */