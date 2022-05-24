const leerAlumnos = async ()=>{
    console.log('leerAlumnos');
    
    try{
        const uri = 'http://localhost:3000/alumnos/'
        
        const peticionAlumnos = await fetch(uri,{
            
            method: 'GET'
            })
        const datos = await peticionAlumnos.json();
        console.log(datos);
        
        var html = `
        <table class="table table-striped">
            <tr class="table-secondary">
                <th>Nombre</th>
                <th>Apellido 1</th>
                <th>Apellido 2</th>
                <th>DNI</th>
                <th>Imagen</th>
            </tr>
        `

        datos.forEach(element =>{
            html += `
            <tr class="table table-dark">
                
                <td><i data-id=${element._id} class="fa-solid fa-trash"></i><i data-id=${element.email} class="fa-solid mx-3 fa-pen-to-square"></i></td>
                <td>${element.nombre}</td>
                <td>${element.apellido1}</td>
                <td>${element.apellido2}</td>
                <td>${element.dni}</td>
                <td>${element.imagen}</td>
            </tr>
            `
        })
        html += `
        </table>
        `
        //inyectamos datos en el HTML element
            document.querySelector('.listaAlumnos').innerHTML = html
    } catch(err){
        console.log('HA OCURRIDO UN ERROR AL LEER EN LA BASE DE DATOS' + err);
    }
}

export {leerAlumnos}