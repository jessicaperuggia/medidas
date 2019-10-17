function obtemUsuarioDoFormulario(form){
    var usuario ={
        nome: form.nome.value,
        peso: form.peso.value,
        cintura: form.cintura.value,
        quadril: form.quadril.value,
        busto: form.busto.value,
        biceps: form.bicpes.value,
        coxa: form.coxa.value
    }

    return usuario;
}

function montarTr(usuario){
    var usuarioTr = document.createElement("tr");
    usuarioTr.classList.add("usuario");
}