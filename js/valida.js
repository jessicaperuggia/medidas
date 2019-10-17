function validaUsuario(usuario){
    var erros = [];

    if (usuario.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if (usuario.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if (usuario.cintura.length == 0){
        erros.push("A cintura não pode ser em branco");
    }
    if (usuario.quadril.length == 0){
        erros.push("O quadril não pode ser em branco");
    }
    if (usuario.busto.length == 0){
        erros.push("O busto não pode ser em branco");
    }
    if (usuario.biceps.length == 0){
        erros.push("O bíceps não pode ser em branco");
    }
    if (usuario.coxa.length == 0){
        erros.push("A coxa não pode ser em branco");
    }

    return erros;

}