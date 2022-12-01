function validarform2(){
    const nom = document.getElementById("nombre").value;
    const elecc = document.getElementById('elecc1').value;
    const elecc2 = document.getElementById('elecc2').value;
    const area = document.getElementById('area').value;
    var textContent = 'Gracias por su comentario: ' + nom + " sus eleccion 1 fue: " + elecc + " su segunda eleccion: " + elecc2 + " y su recomendacion fue: "+area;
    if(elecc != "Eliga lo bueno que tenemos" && elecc2 != "¿Que tan desconforme se siente?" && area != ""){
        window.alert(textContent);
        window.location.reload();
    } else {
        window.alert("Rellene los campos por favor");
    }
}

function enviarCorreo(){
    window.location.reload();
    window.alert("Nos contactaremos contigo");
}