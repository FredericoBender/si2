function validaForm() {

    saveForm();

    if(document.dados.tx_nome.value="" || 
    document.dados.tx_nome.value.length < 8 ){
        alert( "Preencha campo NOME corretamente!" );
        document.dados.tx_nome.focus();
        loadForm();
        return false;
    }


    if( document.dados.email.value=="" || 
    document.dados.email.value.indexOf('@')==-1 || 
    document.dados.email.value.indexOf('.')==-1 )
    {
    alert( "Preencha o campo E-MAIL corretamente!" );
    document.dados.email.focus();
    loadForm();
     return false;
    }
    

    if(document.dados.cpf.value.length < 11 || !isNumber(document.dados.cpf.value)){
    alert( "Preencha o campo CPF corretamente! Sem pontos, traços ou espaços." );
     document.dados.cpf.focus();
     loadForm();
     return false;
    }

    if(document.dados.tel.value.length<8 || !isNumber(document.dados.tel.value)){
    alert( "Preencha o campo TELEFONE corretamente! Sem pontos, traços ou espaços." );
     document.dados.tel.focus();
     loadForm();
     return false;
    }

    alert("Enviado com sucesso!");

}

var nome, email, cpf;

function saveForm(){
    nome = document.dados.tx_nome.value;
    email = document.dados.email.value;
    cpf = document.dados.cpf.value;
}

function loadForm(){
    document.dados.tx_nome.value = nome; 
    document.dados.email.value = email;
    document.dados.cpf.value = cpf;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}