const formulario = document.querySelector("#formulario")

formulario.addEventListener( "submit", validarform )

function validarform(e){
    e.preventDefault()
    const nom = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const city = document.querySelector('#city').value
    const elecc = document.querySelector('#elecc').value
    const valor = document.querySelector('#valor').value
    const respuesta = document.querySelector('#resp')
    respuesta.textContent = 'Nombre cliente: '+nom+" email: "+email+" ciudad: "+city+" beneficio elegido: "+elecc+" Donacion: "+valor 
}

const formulario2 = document.querySelector("#formulario2")

formulario2.addEventListener( "submit", validarform2 )

function validarform2(x){
    x.preventDefault()
    const nom = document.querySelector('#nombre').value
    const elecc = document.querySelector('#elecc1').value
    const elecc2 = document.querySelector('#elecc2').value
    const area = document.querySelector('#area').value
    const respuesta2 = document.querySelector('#respuesta2')
    respuesta2.textContent = 'Gracias por su comentario: '+nom+" sus eleccion 1 fue: "+elecc+" su segunda eleccion: +"+elecc2+" y su recomendacion fue: "+area
}