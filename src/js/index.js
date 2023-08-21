const nome = document.getElementById('#nome');
const email = document.getElementById('#email');
const telefone = document.getElementById('#telefone');
const msg = document.getElementById('#msg');

function enviarEChecar() {

    if (document.querySelector('#nome').value === "") {
        document.querySelector('#nome').classList.add("avisoinputerror")
        document.querySelector('#msgnome').classList.add("avisoerror")
        document.querySelector('#nome').classList.remove("avisoinputok")
    } else {
        document.querySelector('#nome').classList.add("avisoinputok")
        document.querySelector('#msgnome').classList.remove("avisoerror")
    }
    if (document.querySelector('#email').value === "") {
        document.querySelector('#email').classList.add("avisoinputerror")
        document.querySelector('#msgemail').classList.add("avisoerror")
        document.querySelector('#email').classList.remove("avisoinputok")
    } else {
        document.querySelector('#email').classList.add("avisoinputok")
        document.querySelector('#msgemail').classList.remove("avisoerror")
    }
    if (document.querySelector('#telefone').value === "") {
        document.querySelector('#telefone').classList.add("avisoinputerror")
        document.querySelector('#msgtelefone').classList.add("avisoerror")
        document.querySelector('#telefone').classList.remove("avisoinputok")
    } else {
        document.querySelector('#telefone').classList.add("avisoinputok")
        document.querySelector('#msgtelefone').classList.remove("avisoerror")
    }
    if (document.querySelector('#msg').value === "") {
        document.querySelector('#msg').classList.add("avisoinputerror")
        document.querySelector('#megmsg').classList.add("avisoerror")
        document.querySelector('#msg').classList.remove("avisoinputok")
    } else {
        document.querySelector('#msg').classList.add("avisoinputok")
        document.querySelector('#megmsg').classList.remove("avisoerror")
    }

}