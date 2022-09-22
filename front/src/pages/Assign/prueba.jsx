import React, { useState } from "react";
import axios from 'axios';
// EditUser es el componente que edita la informacion del usuario, puede cambiar su nombre de usuario, su email y su contraseña, se muestra cuando el usuario da click en el lapiz que aparece al lado de sus "estadisticas"(posts y likes). El componente tambien incluye un div llamado "glassmorphism" para difuminar el fondo cuando se visualice el pop-up.

// El estado se le pasa desde el padre, tiene que estar false por default y el padre tiene que tener un boton que cambie este estado a true. La x debe cambiar ese estado a falso, y hay que indicarle en que vista se encuentra con el prop "father".

// Le paso la informacion del usuario que traje desde el profile y la URI que esta definida tambien en profilee.js



function ConfigureUser() {


    const URI = "http://localhost:8000/admin/orientados/:id/orientadorToOrientado";

    console.log(URI)
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI)
        console.log(URI)
        // window.location.reload();
    }

    return (
        <>
            <form method='PUT' className='profileForm' onSubmit={handleSubmit}>
                <input type='text' id='orientadore' name='orientadore'/>
                <input type='submit' />
            </form>

        </>
    );
}

export default ConfigureUser;