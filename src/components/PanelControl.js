import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
      <h2>Panel de Control</h2>
      <nav>
        <ul>
          <li><NavLink to="/panel/inicio">Inicio</NavLink></li>
          <li><NavLink to="/panel/crear_articulos">Crear articulos</NavLink></li>
          <li><NavLink to="/panel/gestion-usuarios">Gestión usuarios</NavLink></li>
          <li><NavLink to="/panel/acerca_de">Acerca de</NavLink></li>
        </ul>
      </nav>
      <div>
        {/**Cargar sub-rutas */}
        <Outlet/>
      </div>
    </div>
  )
}
