function encriptar() {
  let texto = document.getElementById("text-entry").value.toLowerCase();
  var txtEncryption = texto.replace(/e/gim, "enter");
  var txtEncryption = txtEncryption.replace(/o/gim, "ober");
  var txtEncryption = txtEncryption.replace(/i/gim, "imes");
  var txtEncryption = txtEncryption.replace(/a/gim, "ai");
  var txtEncryption = txtEncryption.replace(/u/gim, "ufat");

  document.querySelector(".right__img").style.display = "none";
  document.querySelector(".right__title").style.display = "none";
  document.querySelector(".right__textarea").innerHTML = txtEncryption;
  document.querySelector(".copy").style.display = "show";
  document.querySelector(".copy").style.display = "inherit";
}

function desencriptar() {
  let texto = document.getElementById("text-entry").value.toLowerCase();
  var txtEncryption = texto.replace(/enter/gim, "e");
  var txtEncryption = txtEncryption.replace(/ober/gim, "o");
  var txtEncryption = txtEncryption.replace(/imes/gim, "i");
  var txtEncryption = txtEncryption.replace(/ai/gim, "a");
  var txtEncryption = txtEncryption.replace(/ufat/gim, "u");

  document.querySelector(".right__img").style.display = "none";
  document.querySelector(".right__title").style.display = "none";
  document.querySelector(".right__textarea").innerHTML = txtEncryption;
  document.querySelector(".copy").style.display = "show";
  document.querySelector(".copy").style.display = "inherit";
}

function copiar() {
  var contenido = document.querySelector(".right__textarea");
  contenido.select();
  document.execCommand("copy");
  Swal.fire({
    title: "Copied",
    text: "successfully copied text",
    icon: "success",
  });
}
