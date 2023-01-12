const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split('');
    return nomeComoArray.length >= 2;
}

form.addEventListener ('submit', function(e) {
    
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDepositado = document.getElementById('valor-depositado');
    const mensagemSucesso = 'Montante de: <b>$(valorDepositado.value)</b> depositado para o cliente: <b>$(nomeBeneficiario.value)</b> - conta: <b>$(numeroContaBeneficiario.value)</b>';
    
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.innerHTML = mensagemSucesso; 
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value ='';
        numeroContaBeneficiario.value ='';
        valorDepositado.value ='';

    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error.message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error.message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error.message').style.display = 'none';
    }
});


