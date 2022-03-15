
function testarSenha(senha) {

    var validos = '1234567890ABCDEFGHIJKLMNOPQRSTUVXYZW()#@$%&*-_+=';
    var alfabetoMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVXYZW';

    var lista = senha.split('');
    var caracter = false;
    var maiuscula = 0;
    var resultado = '';
    // alert('Senha= '+senha)

    if (senha.length < 6 || senha.length > 10) {
        resultado = 'A senha tem '+pw.length+ ' dígitos (deve ter de 6 a 10)';
        alert(resultado);
        return resultado;                                 
    }  

    if (!isNaN(lista[0])) {
        resultado = 'Não pode começar por número';
        alert(resultado);
        return resultado;
    }

    for (i=0; i<lista.length; i++) {   // verificando dígito a dígito
        var letraM = lista[i].toUpperCase();
        caracter = validos.includes(letraM); 

        if (! caracter) {  // checa se o caracter é válido
            resultado = 'Caracter inválido detectado'; 
            alert(resultado);      
            return resultado;
        } 
        if (alfabetoMaiusculo.includes(lista[i])) { 
            maiuscula = 1;  // verifica se tem pelo menos uma letra maiúscula
        }
    }
    if (caracter) {  // sendo todos os caractéres válidos ...
        if (maiuscula > 0) {  // vê Se há pelo menos uma letra maiúscula
            resultado = 'Senha OK';
            // alert(resultado);
        } else {
            resultado = 'Deve haver pelo menos uma letra maiúscula'; 
            alert(resultado);           
        }
        return resultado;       
    }
}