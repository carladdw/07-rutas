import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Personas = () => {
  let {nombre="Carla",apellido="Henriquez"} = useParams();
  const navegar = useNavigate();
  const enviar =(e) =>{
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    navegar(`/personas/${nombre}/${apellido}`);
  }
  return (
    <div>
      <h2>Pagina de persona: {nombre} {apellido}</h2>
        <p>Esta es la pagina de persona</p>
        <hr/>
        <form onSubmit={enviar} className="col-2">
          <label class="form-label">Cambia el nombre y apellido</label>
          <input className="form-control mb-2" type="text" name="nombre" placeholder="Escribe el nombre"/>
          <input className="form-control mb-2" type="text" name="apellido" placeholder="Escribe el apellido"/>
          <input className="btn btn-primary" type="submit" name="enviar" value="Enviar"/>
        </form>
    </div>
  )
}
