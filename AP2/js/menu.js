let menu_lateral = document.getElementById("menu-lateral");
let menu_icone = document.getElementById("menulista-icone");
let conteudo = document.getElementById("conteudo-do-menu");
let conteudo_inferior = document.getElementById("conteudo-do-menu-inferior");

let abrirMenu = true;
conteudo.style.pointerEvents = "none";
conteudo_inferior.style.pointerEvents = "none";

//Menu começa fechado - com o conteúdo não clicável
menu_icone.onclick = function() {
    //deixa o menu aberto - conteúdo fica clicável
    if(abrirMenu == true) {
        menu_lateral.style = "width: 310px; border: 3px solid black;";
        conteudo.style.pointerEvents = "auto";
        conteudo_inferior.style.pointerEvents = "auto";
        abrirMenu = false;
    }
    //deixa o menu fechado - conteúdo fica não clicável
    else {
        menu_lateral.style = "width: 60px";
        conteudo.style.pointerEvents = "none";
        conteudo_inferior.style.pointerEvents = "none";
        abrirMenu = true;
    }
}