import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h2>Error</h2>
        <p>Esta pagina no existe</p>
        <Link className="btn btn-primary" to="/inicio">
          Inicio
				</Link>
    </div>
  )
}
