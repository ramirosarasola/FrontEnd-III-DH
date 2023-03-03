import React from 'react'
import { useState } from 'react';

const Form = () => {

    const [user, setUser] = useState(
        {
            name: '',
            age: '',
            pokemon: '',
        })

    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (user.name.length > 3){ setShow(true)
        console.log(user.name)}
        else console.log('Hubo un error')
        
    }


    const resetValues = () => {
        setUser({
            name: '',
            age: '',
            pokemon: '',
        })
    }

    return (
        <div>

            <form onSubmit={(event) => handleSubmit(event)}>

                <label>Nombre</label>
                <input type="text" value={user.name} onChange={(event) => setUser({ ...user, name: event.target.value })} />

                <label>Edad</label>
                <input type="text" value={user.age} onChange={(event) => setUser({ ...user, age: event.target.value })} />

                <label>Pokemon</label>
                <input type="text" value={user.pokemon} onChange={(event) => setUser({ ...user, pokemon: event.target.value })} />

                <button>Enviar</button>
                <button onClick={resetValues}>Reset</button>
            </form>

            <h2>Información ingresada</h2>
            <h4>Nombre: {user.name}</h4>
            <h4>Apellido: {user.apellido}</h4>
            <h4>Pokemon: {user.pokemon}</h4>

        </div>
    )
}

export default Form