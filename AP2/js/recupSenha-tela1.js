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

let campo_email = document.getElementById("email");
let botao = document.getElementById("enviarBotao");
let imagem = document.getElementById("cachorroImagem");

let padraoEmail_1 = /^\S+@\S+$/;
let padraoEmail_2 = /^\S+@\S+\.\S+$/;
let padraoEmail_3 = /^\S+@\S+\.+$/;
let padraoEmail_4 = /^\S+@\.+$/;

// Verifica se o que está digitado no campo Email é válido ou não
function validaEmail() {
    if(!campo_email.value.match(padraoEmail_1) && !campo_email.value.match(padraoEmail_2))
        return false;
    if(campo_email.value.match(padraoEmail_3))
        return false;
    if(campo_email.value.match(padraoEmail_4))
        return false;
    return true;
}

botao.style.pointerEvents = "none";

campo_email.oninput = function() {
    if(validaEmail()) {
        botao.style.opacity = "0.9";
        botao.style.pointerEvents = "auto";
        imagem.style.top = "56%";
        imagem.style.left = "37%";
        imagem.style.width = "150px";
    }
    else {
        botao.style.opacity = "0";
        botao.style.pointerEvents = "none";
        imagem.style.top = "43%";
        imagem.style.left = "30%";
        imagem.style.width = "225px";
    }
}