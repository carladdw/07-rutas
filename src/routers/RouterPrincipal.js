import React from 'react';
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import {Articulos} from '../components/Articulos';
import {Contacto} from '../components/Contacto';
import {Error} from '../components/Error';
import {Inicio} from '../components/Inicio';
import {Personas} from '../components/Personas';

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
							<NavLink to="/personas" className="nav-link">
								Personas
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
			<section className="container-fluid mt-3">
				{/**En routes se carga los componentes */}
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/articulos" element={<Articulos />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/personas/:nombre/:apellido" element={<Personas />} />
					<Route path="/personas/:nombre" element={<Personas />} />
					<Route path="/personas" element={<Personas />} />
					<Route path="/redirigir" element={<Navigate to="/personas" />} />
					<Route path="*" element={<Error />} />
					{/**Nota: path="*" es para condicionar cuaquier ruta que no esta definido*/}
				</Routes>
			</section>
		</BrowserRouter>
	);
};
