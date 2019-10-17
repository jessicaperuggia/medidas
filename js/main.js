var botaoAdicionar = document.querySelector("#adicionar-usuario");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var usuario = obtemUsuarioDoFormulario(form);
    var erros = validaUsuario(usuario);

    if (erros.length > 0){
        exibeMenssagemDeErro(erros);
        return;
    }
    adicionarUsuarioNaTabela(usuario);
    
    form.reset();

    var menssagensErro = document.querySelector("#menssagens-erro");
    menssagensErro.innerHTML = "";

});

function obtemUsuarioDoFormulario(form){
    var usuario ={
        nome: form.nome.value,
        peso: form.peso.value,
        cintura: form.cintura.value,
        quadril: form.quadril.value,
        busto: form.busto.value,
        biceps: form.biceps.value,
        coxa: form.coxa.value
    }

    return usuario;
}

function montarTr(usuario){
    var usuarioTr = document.createElement("tr");
    usuarioTr.classList.add("usuario");

    usuarioTr.appendChild(montarTd(usuario.nome, "info-nome"));
    usuarioTr.appendChild(montarTd(usuario.peso, "info-peso"));
    usuarioTr.appendChild(montarTd(usuario.cintura, "info-cintura"));
    usuarioTr.appendChild(montarTd(usuario.quadril, "info-quadril"));
    usuarioTr.appendChild(montarTd(usuario.busto, "info-busto"));
    usuarioTr.appendChild(montarTd(usuario.biceps, "info-biceps"));
    usuarioTr.appendChild(montarTd(usuario.coxa, "info-coxa"));

    return usuarioTr;
}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionarUsuarioNaTabela(usuario){
    var usuarioTr = montarTr(usuario);
    var tabela = document.querySelector("#tabela-usuarios");
    tabela.appendChild(usuarioTr);
}

function exibeMenssagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}