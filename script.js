let encriptador = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
    
};
function mayuscu() {
    alert("No se permiten mayúsculas en el texto. Por favor, introduce sólo minúsculas.");
    return;
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    if (texto !== "") {
        if (/[A-Z]/.test(texto)) {
            mayuscu();
        }
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        textoEncriptado += encriptador[letra] || letra;
    }
    document.getElementById("resultado2").innerHTML = textoEncriptado.replace(/[^a-z]/gi, ' ');
    document.getElementById("copiardiv").style.display = "block";

}else{
    alert("Por favor, introduce un texto.");
}
}

function desencriptar() {
    let textoDes = document.getElementById("texto").value;
    if (textoDes !== "") {
        if (/[A-Z]/.test(textoDes)) {
            mayuscu();
        }
    let textoDesencriptado = textoDes.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u').replace(/ufat/g, 'u');
    document.getElementById("resultado2").innerHTML = textoDesencriptado.replace(/[^a-z]/gi, ' ');
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
