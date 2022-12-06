
usuarios = [
    {
        usuario: "AASG",
        correo: "aasg2109@gmail.com",
        contrasena: "qwerty"
    },
    {
        usuario: "SergioQuiereNota",
        correo: "sergioquierenota@gmail.com",
        contrasena: "12345678"
    }
];

function validar(){
    const usuario = document.getElementById('usuario').value;
    const con = document.getElementById('con').value;
    var us = false;
    var al = true;
    usuarios.forEach(usEx => {
        if(usuario == usEx.usuario){
            if(con == usEx.contrasena){
                us = true;
            } else {
                window.alert("Contraseña Incorrecta");
            }
            al = false;
        }
    });

    if(!us && al){
        window.alert("Usuario no encontrado");
    } else if (us){
        window.alert("Ingresando a la pagina");
        let targetURL = 'index.html';
        let newURL = document.createElement('a');
        newURL.href = targetURL;
        document.body.appendChild(newURL);
        newURL.click();
    }
}