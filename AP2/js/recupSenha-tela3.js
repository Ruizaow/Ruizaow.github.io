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

//--------------------- DECLARAÇÕES DE VARIÁVEIS ---------------------//

let icone_olho_1 = document.getElementById("eyeicon-1");
let icone_olho_2 = document.getElementById("eyeicon-2");

let mensagem_1 = document.getElementById("msg1");
let mensagem_2 = document.getElementById("msg2");

let campo_senha = document.getElementById("senha");
let campo_cnfmrSenha = document.getElementById("confirmar-senha");

let botao = document.getElementById("enviarBotao");



//--------------------- DECLARAÇÕES DE FUNÇÕES ---------------------//

// Altera a mensagem de erro de Confirma Senha quando ambos os campos de senha combinarem ou não combinarem
function alteraMensagemDois() {
    if(campo_senha.value != campo_cnfmrSenha.value) {
        mensagem_2.textContent = "Senhas não combinam";
        mensagem_2.style.padding = "0 197px 0 0";
        return false;
    }
    mensagem_2.textContent = "Senhas combinam";
    mensagem_2.style.padding = "0 231px 0 0";
    return true;
}

// Realiza as funções de alterar o conteúdo da mensagem de erro e sua opacidade para 100% ao mesmo tempo
function duoMensagemDois() {
    if(campo_senha.value.length < 8) {
        return false;
    }
    mensagem_2.style.opacity = "1";
    alteraMensagemDois();
    return true;
}

// Alteram os ícones do olho do campo Senha para oculto, aberto e fechado
function olhoUmOculto() {
    icone_olho_1.src = "./img/login/eye-occult.png";
    icone_olho_1.style.pointerEvents = "none";
    return true;
}
function olhoUmFechado() {
    icone_olho_1.src = "./img/login/eye-close.png";
    icone_olho_1.style.pointerEvents = "auto";
    return true;
}
function olhoUmAberto() {
    icone_olho_1.src = "./img/login/eye-open.png";
    icone_olho_1.style.pointerEvents = "auto";
    return true;
}

// Alteram os ícones do olho do campo Confirmar Senha para oculto, aberto e fechado
function olhoDoisOculto() {
    icone_olho_2.src = "./img/login/eye-occult.png";
    icone_olho_2.style.pointerEvents = "none";
    return true;
}
function olhoDoisFechado() {
    icone_olho_2.src = "./img/login/eye-close.png";
    icone_olho_2.style.pointerEvents = "auto";
    return true;
}
function olhoDoisAberto() {
    icone_olho_2.src = "./img/login/eye-open.png";
    icone_olho_2.style.pointerEvents = "auto";
    return true;
}



/*--------------------- ALTERAÇÃO DOS ÍCONES DE MOSTRAR/OCULTAR SENHA
                                                +
                        MENSAGENS DE ERROS DOS CAMPOS SENHAS E CONFIRMAR SENHA ---------------------*/

// Deixa o ícone de 'mostrar/ocultar senha' não clicável quando ele estiver oculto (ou seja, quando não está nada digitado em nenhum dos campos de senha)
if(campo_senha.value == "")
    icone_olho_1.style.pointerEvents = "none";
if(campo_cnfmrSenha.value == "")
    icone_olho_2.style.pointerEvents = "none";


//---------- CAMPO DE SENHA ----------//

// Função ativa ao digitar no campo Senha
campo_senha.oninput = function() {
    if(campo_senha.value.length >= 8) {
        mensagem_1.style.opacity = "0";
    }
    else {
        mensagem_1.style.opacity = "1";
        mensagem_2.style.opacity = "0";
    }

    if(campo_cnfmrSenha.value == "")
    {
        if(campo_senha.value == "")
            olhoUmOculto();
        else {
            if(campo_senha.type == "password")
                olhoUmFechado();
            else
                olhoUmAberto();
        }
    }
    else {
        if(campo_senha.value != "")
            duoMensagemDois(); //Altera conteúdo e opacidade 100% para mensagem 2
    }
}

// Função ativa ao clicar no campo Senha
campo_senha.onclick = function() {
    if(campo_senha.value.length < 8)
        mensagem_1.style.opacity = "1";

    if(campo_senha.value != "") {
        if(campo_cnfmrSenha.value == "") {
            if(campo_senha.type == "password")
                olhoUmFechado();
            else
                olhoUmAberto();
        }
        else
            olhoUmOculto(); //Altera conteúdo e opacidade 100% para mensagem 2
    }
}

// Função ativa ao clicar fora do campo Senha
// muda a opacidade das mensagens de erros dos campos de senha para 0
campo_senha.onblur = function() {
    mensagem_1.style.opacity = "0";
    mensagem_2.style.opacity = "0";
}

// Função ativa ao clicar no ícone do olho no campo Senha
// altera o ícone do olho de fechado para aberto
//      se estivar no tipo 'senha', no clique ele muda de fechado para aberto
//      se estivar no tipo 'texto', no clique ele muda de aberto para fechado
icone_olho_1.onclick = function() {
    if(campo_senha.type == "password") {
        campo_senha.type = "text";
        icone_olho_1.src = "./img/login/eye-open.png";
    }
    else {
        campo_senha.type = "password";
        icone_olho_1.src = "./img/login/eye-close.png";
    }
}


//---------- CAMPO DE CONFIRMAR SENHA ----------//

// Função ativa ao digitar no campo Confirmar Senha
campo_cnfmrSenha.oninput = function() {
    // Se a senha for apagada,
    //      1. o olho 2 fica oculto
    //      2. se o campo Senha tiver algo digitado, o olho 1 aparece com o ícone...
    //         ...de acordo com o tipo 'texto' ou 'senha' que está ativo em Confirma Senha
    if(campo_cnfmrSenha.value == "") {
        olhoDoisOculto();

        if(campo_senha.value != "") {
            if(campo_cnfmrSenha.type == "password")
                olhoUmFechado();
            else
                olhoUmAberto();
        }
    }
    // Senão (se a senha for digitada),
    //      1. o olho 1 fica oculto
    //      2. o campo Confirma Senha entra no tipo 'texto' ou 'senha', de acordo com o...
    //         ...tipo que estiver ativo em Senha
    //      3. o ícone do olho 2 fica fechado ou aberto de acordo com o tipo...
    //         'texto' ou 'senha' de Confirma Senha ao ser digitado nele
    else {
        olhoUmOculto();
        if(campo_senha.type == "password")
            campo_cnfmrSenha.type = "password"
        else
            campo_cnfmrSenha.type = "text"

        if(campo_cnfmrSenha.type == "password")
            olhoDoisFechado();
        else
            olhoDoisAberto();
    }
    //Altera conteúdo e opacidade 100% para mensagem 2
    duoMensagemDois();
}

// Função ativa ao clicar no campo Confirmar Senha
campo_cnfmrSenha.onclick = function() {
    if(campo_senha.value.length < 8)
        mensagem_1.style.opacity = "1";
    else {
        if(campo_cnfmrSenha.value != "")
            mensagem_2.style.opacity = "1";
        alteraMensagemDois();
    }
}

// Função ativa ao clicar fora do campo Confirmar Senha
// muda a opacidade das mensagens de erros dos campos de senha para 0
campo_cnfmrSenha.onblur = function() {
    mensagem_1.style.opacity = "0";
    mensagem_2.style.opacity = "0";
}

// Função ativa ao clicar no ícone do olho no campo Confirmar Senha
// altera o ícone do olho de fechado para aberto
//      se estivar no tipo 'senha', no clique ele muda de fechado para aberto + altera o tipo 'senha' para 'texto' de ambos os campos de senha
//      se estivar no tipo 'texto', no clique ele muda de aberto para fechado + altera o tipo 'texto' para 'senha' de ambos os campos de senha
icone_olho_2.onclick = function() {
    if(campo_cnfmrSenha.type == "password") {
        campo_senha.type = "text";
        campo_cnfmrSenha.type = "text";
        icone_olho_2.src = "./img/login/eye-open.png";
    }
    else {
        campo_senha.type = "password";
        campo_cnfmrSenha.type = "password";
        icone_olho_2.src = "./img/login/eye-close.png";
    }
}


//---------- BOTÃO DE CADASTRO ----------//
botao.onclick = function() {
    if(campo_senha.value.length < 8)
        mensagem_1.style.opacity = "1";
    else
        duoMensagemDois(); //Altera conteúdo e opacidade 100% para mensagem 2
}



//--------------------- REMOÇÃO DE ERROS ---------------------//

// Remove disparo de alerta de erro do campo senha
campo_senha.addEventListener('invalid', (function() {
    return function (e) {
        e.preventDefault();
        document.getElementById("senha").focus();
    };
})(), true);

// Remove disparo de alerta de erro do campo 'confirmação de senha'
campo_cnfmrSenha.addEventListener('invalid', (function() {
    return function (e) {
        e.preventDefault();
        document.getElementById("confirmar-senha").focus();
    };
})(), true);



//--------------------- ADIÇÃO DE ERROS ---------------------//

let formulario = document.getElementById("myform");

formulario.onsubmit = function() {
    if(!validaSenhaMenorOito() || !validaSenhasIguais())
        return false;
    return true;
}

function validaSenhaMenorOito() {
    if(campo_senha.value.length < 8)
        return false;
    return true;
}

function validaSenhasIguais() {
    if(campo_senha.value != campo_cnfmrSenha.value)
        return false;
    return true;
}