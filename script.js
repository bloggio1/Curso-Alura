let encriptador = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function encriptar() {
    let texto = document.getElementById("texto").value;
    if (texto !== "") {
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        textoEncriptado += encriptador[letra] || letra;
    }
    document.getElementById("resultado2").innerHTML = textoEncriptado;
    document.getElementById("copiardiv").style.display = "block";

}else{
    alert("Por favor, introduce un texto.");
}
}

function desencriptar() {
    let textoDes = document.getElementById("texto").value;
    if (textoDes !== "") {
    let textoDesencriptado = textoDes.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    document.getElementById("resultado2").innerHTML = textoDesencriptado;
    document.getElementById("copiardiv").style.display = "block";
    
}else{
    alert("Por favor, introduce un texto.");
}
}

function copiarResultado() {
    let resultado = document.getElementById("resultado2").innerHTML;
    navigator.clipboard.writeText(resultado);
    document.getElementById("confirmar").innerHTML = "Texto Copiado";
    setTimeout(function() {
    document.getElementById("confirmar").innerHTML = "";
    }, 3000);
}