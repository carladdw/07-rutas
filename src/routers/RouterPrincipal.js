import React from 'react';
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import {Articulos} from '../components/Articulos';
import {Contacto} from '../components/Contacto';
import {Error} from '../components/Error';
import {Inicio} from '../components/Inicio';

export const RouterPrincipal = () => {
	return (
		<BrowserRouter>
			<nav className="navbar navbar-expand-lg bg-danger">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/inicio">
          Pagina con Routers
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
            <NavLink to="/inicio" className="nav-link">
							Inicio
						</NavLink>
            <NavLink to="/articulos" className="nav-link">
							Articulos
						</NavLink>
              <NavLink to="/contacto" className="nav-link">
							Contacto
						</NavLink>
						</div>
					</div>
				</div>
			</nav>
			{/**En routes se carga los componentes */}
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route path="/articulos" element={<Articulos />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="*" element={<Error />} />
				{/**Nota: path="*" es para condicionar cuaquier ruta que no esta definido*/}
			</Routes>
		</BrowserRouter>
	);
};
