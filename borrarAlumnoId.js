import { leerAlumnos } from "./leerAlumnos.js";

const borrarAlumnoId = async (id)=>{
    
    console.log('borrarAlumnoId');
    
    

    try{
        
        const dato = {
            id:id,
            nombre: document.querySelector('#name').value,
            dni: document.querySelector('#dni').value,
            imagen: document.querySelector('#img').value,
            apellido1: document.querySelector('#surname1').value,
            apellido2: document.querySelector('#surname2').value
        }

        const uri = 'http://localhost:3000/api/alumnos/'
        
        const alumnoNuevo = await fetch(uri,{
            method: 'DELETE',
            body:JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json"
            }
            
        })
        
        
    }catch(err){
        console.log('ERROR'+err);
    }

    leerAlumnos()
}


export {borrarAlumnoId}