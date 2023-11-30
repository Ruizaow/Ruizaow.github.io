//--------------------- DECLARAÇÕES DE VARIÁVEIS ---------------------//

let icone_olho_1 = document.getElementById("eyeicon-1");
let icone_olho_2 = document.getElementById("eyeicon-2");

let campo_nome = document.getElementById("nome");
let campo_email = document.getElementById("email");
let campo_senha = document.getElementById("senha");
let campo_cnfmrSenha = document.getElementById("confirmar-senha");

let botao = document.getElementById("cadastroBotao");

let mensagem_1 = document.getElementById("msg1");
let mensagem_2 = document.getElementById("msg2");

let padraoEmail_1 = /^\S+@\S+$/;
let padraoEmail_2 = /^\S+@\S+\.\S+$/;
let padraoEmail_3 = /^\S+@\S+\.+$/;
let padraoEmail_4 = /^\S+@\.+$/;

let checkmark_1 = document.getElementById("check1");
let checkmark_2 = document.getElementById("check2");
let checkmark_3 = document.getElementById("check3");
let checkmark_4 = document.getElementById("check4");



//--------------------- DECLARAÇÕES DE FUNÇÕES ---------------------//

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

// Permite que as mensagens de erro de Senha e Confirma Senha apareçam assim que os campos Nome e Email forem preenchidos
function podeAparecerMensagem() {
    if(campo_nome.value != "" && validaEmail())
        return true;
    else
        return false;
}

// Alteram a opacidade das mensagens de erro para 100%
function mensagemUmOpacidadeUm() {
    if(!podeAparecerMensagem())
        return false;
    mensagem_1.style.opacity = "1";
    return true;
}
function mensagemDoisOpacidadeUm() {
    if(!podeAparecerMensagem())
        return false;
    mensagem_2.style.opacity = "1";
    return true;
}

// Altera a mensagem de erro de Confirma Senha quando ambos os campos de senha combinarem ou não combinarem
// além de também mostrar ou ocultar o checkmark do campo
function alteraMensagemDois() {
    if(campo_senha.value != campo_cnfmrSenha.value) {
        mensagem_2.textContent = "Senhas não combinam";
        mensagem_2.style.padding = "0 197px 0 0";
        checkmark_4.style.opacity = "0";
        return false;
    }
    mensagem_2.textContent = "Senhas combinam";
    mensagem_2.style.padding = "0 231px 0 0";
    checkmark_4.style.opacity = "1";
    return true;
}

// Realiza as funções de alterar o conteúdo da mensagem de erro e sua opacidade para 100% ao mesmo tempo
function duoMensagemDois() {
    if(campo_senha.value.length < 8) {
        return false;
    }
    mensagemDoisOpacidadeUm();
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
// mostra ou oculta o checkmark do campo
campo_senha.oninput = function() {
    if(campo_senha.value.length >= 8) {
        mensagem_1.style.opacity = "0";
        checkmark_3.style.opacity = "1";
    }
    else {
        mensagemUmOpacidadeUm();
        mensagem_2.style.opacity = "0";
        checkmark_3.style.opacity = "0";
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
        mensagemUmOpacidadeUm();

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
        mensagemUmOpacidadeUm();
    else {
        if(campo_cnfmrSenha.value != "")
            mensagemDoisOpacidadeUm();
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
        mensagemUmOpacidadeUm();
    else
        duoMensagemDois(); //Altera conteúdo e opacidade 100% para mensagem 2
}




//--------------------- ALTERAÇÃO DAS MENSAGENS DE ERRO ---------------------//

let fields = document.querySelectorAll("[required]");

// Adiciona o evento "invalid" para ser customizado pela função "customValidation"
for(let field of fields) {
    field.addEventListener("invalid", customValidation);
}

// Modifica as mensagens de erro para os campos do tipo "email", "text" e "password"
function customValidation(event) {
    let field = event.target;

    // Lógica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // Se não for customError,
            // então verifica se tem erro
            if(error !== "customError") {
                if(field.validity[error])
                    foundError = error;
            }
        }

        return foundError;
    }

    // Lógica para customizar as mensagens de erro
    function customMessage(typeError) {
        let messages = {
            text: {
                valueMissing: "Insira suas informações"
            },
            email: {
                valueMissing: "Insira suas informações",
                typeMismatch: "Por favor, insira um email válido"
            }
        }

        return messages[field.type][typeError]
    }

    // Troca a mensagem de required "please fill out this field"
    let error = verifyErrors();

    if(error) {
        let message = customMessage(error);
        field.setCustomValidity(message);
    }
    else
        field.setCustomValidity("");
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




//--------------------- CHECKMARKS ---------------------//

// Os comandos abaixo mostram ou ocultam os checkmarks de cada campo, de acordo se o usuário...
// cumpre ou não os requisitos de cada um ao digitar neles...

campo_nome.oninput = function() {
    if(campo_nome.value != "")
        checkmark_1.style.opacity = "1";
    else
        checkmark_1.style.opacity = "0";
}

campo_email.oninput = function() {
    if(validaEmail())
        checkmark_2.style.opacity = "1";
    else
        checkmark_2.style.opacity = "0";
}