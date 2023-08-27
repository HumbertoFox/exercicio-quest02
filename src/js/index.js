const formAtivos = document.querySelectorAll('.activo')

function enviarEChecar() {

    formAtivos.forEach((formAtivo) => {
        if (formAtivo.value) {
            formAtivo.classList.add('avisoinputok')
            formAtivo.nextElementSibling.classList.remove('avisoerror')
        } else {
            formAtivo.classList.remove('avisoinputok')
            formAtivo.classList.add('avisoinputerror')
            formAtivo.nextElementSibling.classList.add('avisoerror')
        }
    })
}