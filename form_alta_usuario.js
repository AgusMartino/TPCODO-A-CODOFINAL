let nombre = document.getElementById('name')
let lastname = document.getElementById('lastname')
let emial = document.getElementById('email')
let documentNumber = document.getElementById('document_number')
let form = document.getElementById('form')

form.addEventListener('submit', e=>{
    e.preventDefault
    console.log('Validando datos')

    let mensajeErrorName = []
    let mensajeErrorLastName = []
    let mensajeErrorEmail = []
    let mensajeErrorDocumentNumber = []

    if(nombre.value === null){
        mensajeErrorName.push('Debe completar su nombre')
    }
    if(lastname.value === null){
        mensajeErrorLastName.push('Debe completar su apellido')
    }
    if(emial.value === null){
        mensajeErrorEmail.push('Debe completar su email')
    }
    if(documentNumber.value === null){
        mensajeErrorDocumentNumber.push('Debe completar su numero de documento')
    }

    let error_name = document.getElementById('errorNomre')
    let error_lastname = document.getElementById('errorApellido')
    let error_email = document.getElementById('errorEmail')
    let error_documentNumber = document.getElementById('errorNumeroDocumento')
    error_name.innerHTML = mensajeErrorName
    error_lastname.innerHTML = mensajeErrorLastName
    error_email.innerHTML = mensajeErrorEmail
    error_documentNumber.innerHTML = mensajeErrorDocumentNumber

    return false;
})