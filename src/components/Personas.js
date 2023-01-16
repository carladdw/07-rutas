import React from 'react'
import { useParams } from 'react-router-dom'

export const Personas = () => {
  let {nombre="Carla",apellido="Henriquez"} = useParams();
  return (
    <div>
      <h2>Pagina de persona: {nombre} {apellido}</h2>
        <p>Esta es la pagina de persona</p>
    </div>
  )
}
