//--------------------- ALTERAÇÃO DO ÍCONE DE MOSTRAR/OCULTAR SENHA ---------------------//

let icone_olho = document.getElementById("eyeicon");
let campo_senha = document.getElementById("senha");


// Deixa o ícone de 'mostrar/ocultar senha' não clicável quando ele estiver oculto (ou seja, quando não está nada digitado no campo Senha)
if(campo_senha.value == "")
    icone_olho.style.pointerEvents = "none";


// Função ativa ao digitar no campo Senha
// deixa o ícone do olho amostra
//      Sem digitar nenhum caractere, o ícone fica oculto e não clicável
//      Ao digitar, o ícone aparece
//          se estivar no tipo 'senha', ele aparece fechado
//          (se não) se estivar no tipo 'texto', ele aparece aberto
campo_senha.oninput = function() {
    if(campo_senha.value == "") {
        icone_olho.src = "./img/login/eye-occult.png";
        icone_olho.style.pointerEvents = "none";
    }
    else {
        if(campo_senha.type == "password") {
            icone_olho.src = "./img/login/eye-close.png";
            icone_olho.style.pointerEvents = "auto";
        }
        else {
            icone_olho.src = "./img/login/eye-open.png";
            icone_olho.style.pointerEvents = "auto";
        }
    }
}

// Função ativa ao clicar no ícone do olho no campo Senha
// altera o ícone do olho de fechado para aberto
//      se estivar no tipo 'senha', no clique ele muda de fechado para aberto + altera o tipo 'senha' para 'texto'
//      se estivar no tipo 'texto', no clique ele muda de aberto para fechado + altera o tipo 'texto' para 'senha'
icone_olho.onclick = function() {
    if(campo_senha.type == "password") {
        campo_senha.type = "text";
        icone_olho.src = "./img/login/eye-open.png";
    }
    else {
        campo_senha.type = "password";
        icone_olho.src = "./img/login/eye-close.png";
    }
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
            email: {
                valueMissing: "Preencha o campo do email",
                typeMismatch: "Por favor, preencha um email válido"
            },
            text: {
                valueMissing: "Preencha o campo da senha",
                tooShort: "Senha inválida (pelo menos 8 caracteres)"
            },
            password: {
                valueMissing: "Preencha o campo da senha",
                tooShort: "Senha inválida (pelo menos 8 caracteres)"
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