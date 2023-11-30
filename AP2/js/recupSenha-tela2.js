//--------------------- AXIOS ---------------------//

let imgFundo = document.getElementById("background");
getCachorro();

async function getCachorro() {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');

        imgFundo.src = response.data.message;
        console.log(response);
        
    } catch(error) {
        console.error(error);
    }
}



//--------------------- TELA ---------------------//

let campo_codigo = document.getElementById("codigo");
let botao = document.getElementById("enviarBotao");
let imagem = document.getElementById("cachorroImagem");
let padraoNumero = /^[0-9]+$/;

botao.style.pointerEvents = "none";

campo_codigo.oninput = function() {
    if(campo_codigo.value.match(padraoNumero) && campo_codigo.value.length == 6) {
        botao.style.opacity = "0.9";
        botao.style.pointerEvents = "auto";
        imagem.style.top = "51%";
        imagem.style.left = "35%";
        imagem.style.width = "150px";
    }
    else {
        botao.style.opacity = "0";
        botao.style.pointerEvents = "none";
        imagem.style.top = "40%";
        imagem.style.left = "30%";
        imagem.style.width = "200px";
    }
}