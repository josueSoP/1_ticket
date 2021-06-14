//se puede eliminar
let form = document.getElementById('nuevoForm');
let mes = document.getElementById('mes');
let proyecto = document.getElementById('proyecto');
let versiones = document.getElementById('versiones');

//Manda el post
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let data = await JSON.parse(localStorage.getItem('dataUsuario'))
    try{
        let resultado = await fetch("http://localhost:3000/guardarProyecto", { // /nuevousuarios
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json",
                'Authorization': `Bearer ${data.token}`
            },
            body: JSON.stringify( {
                "mes": mes.value,
                "proyecto": proyecto.value,
                "versiones": versiones.value,
            })
        })   
    
        if(resultado){
            swal({
                title: "Proyecto Agregado Correctamente",
                icon: "success",
                });
                location.href = '/listarTablas'
        }else{
            swal({
                title: "No se guardo Proyecto",
                icon: "error",
            });
        }
    }catch (error) {
        console.log(error)
        swal({
            title: "No se pudo guardar proyecto",
            icon: "error",
            });
    }
})

function newFormulario()
{
    mes.value = ""
    proyecto.value = ""
    versiones.value = ""
}