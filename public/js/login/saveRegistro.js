let form = document.getElementById('formRegistro');
let nombres = document.getElementById('nombres');
let apellidos = document.getElementById('apellidos');
let usuario = document.getElementById('usuario');
let email = document.getElementById('email');
let pass = document.getElementById('pass');

//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let data = await JSON.parse(localStorage.getItem('dataUsuario'))
    try{
    let resultado = await fetch("http://localhost:3000/save", { // /nuevousuarios
        method: 'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json",
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify( {
            "nombres": nombres.value,
            "apellidos": apellidos.value,
            "email": email.value,
            "usuario": usuario.value,
            "pass": pass.value,
        })
    })

    if(resultado.status == 400){
        swal({
            title: "No se pudo registrar",
            text: "Error en la creacion del usuario o el usuario ya existe",
            icon: "error",
          });
    } else {
        swal({
            title: "Usuario Agregado Correctamente",
            icon: "success",
          });
        location.href = '/'
    }
} catch (error) {
    swal({
        title: "Error al Registrar",
        text: "Refresca la pagina o intenta mas tarde",
        icon: "error",
      });
}
})

function newFormulario()
{
    nombres.value = ""
    apellidos.value = ""
    email.value = ""
    usuario.value = ""
    pass.value = ""
}