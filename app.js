import { leerAlumnos } from "./leerAlumnos.js"
import { crearAlumno } from "./crearAlumno.js"
import { leerAlumnoId } from "./leerAlumnoId.js"
import { borrarAlumnoId } from "./borrarAlumnoId.js"
import { modificarAlumnoId } from "./modificarAlumnoId.js"


const app = ()=>{
    leerAlumnos()
    document.querySelector('#formulario').addEventListener('submit',crearTarea)
    //DETECTO CON BURBUJEO SI SE CLICA EN EL ICONO BASURA O EN EL LAPIZ (EDIT)
    document.querySelector('.listaAlumnos').addEventListener('click',(element)=>{
        if (element.target.classList.contains('fa-trash')){
            //BDO.pop() -- solo saca el ultimo.. mejor probamos con splice
            //BDO.splice(element.target.dataset.id,1) 
            alert('hola')
            console.log(element.target.dataset.id);
            borrarAlumnoId(element.target.dataset.id)

        }
    })
    // leerUsuarioId()
    // borrarUsuarioId()
    // modificarUsuarioId()
    // crearUsuario()
}
export {app}