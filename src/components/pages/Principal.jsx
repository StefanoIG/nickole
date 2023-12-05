import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./pincipal.css"
import LogoUleam from "../../../public/escudo.jpg"
import horario from "../../../public/HORARIOS.jpg"
import Oip from "../../../public/OIP.jpg"
import Seguimiento from "../../../public/SEGUIMIENTO.jpg"
const Principal = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const handleLogout = () => {
    localStorage.setItem('loggedIn', false);
    navigate('/');
  };
  
  return (
    <div className='main'>
          <header>
      <div>
        <img src={LogoUleam} alt="logo uleam" id='logo' />
      </div>
      <ul>
        <li>
          <NavLink to={"/"}>Página principal</NavLink>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <NavLink to={"/register"}>Registrarse</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Iniciar Sesión</NavLink>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </li>
        )}
      </ul>
    </header>
      <section>
        <div className='context-card'>
          <div className='card'>
          <h1>Bienvenido al Sistema de Control de Tutorías de Titulación</h1>
La plataforma que te ayudará a gestionar y optimizar el proceso de tutorías de titulación en la ULEAM.
          </div>
        </div>
        <div className='title-container'>
          <div className='title-card'>
            <h2>Acerca de Nosotros</h2>
            <p>Nuestro sistema de control de tutorías de titulación está diseñado para facilitar la interacción entre estudiantes, tutores y administradores. Ofrecemos herramientas poderosas para la programación de tutorías, seguimiento de progreso y generación de horarios.</p>
          </div>
        </div>
        <div className='images'>
          <NavLink to={"/registrartutos"}>
          <div className="img-container">
            <img src={horario} alt="" />
            <h2>Programacion de Tutorias</h2>
            <p>Programa y gestiona las tutorias de titulacion de manera eficinete y sencilla</p>
          </div>
          </NavLink>
          <NavLink to={"/seguimiento"}>
          <div className="img-container">
            <img src={Seguimiento} alt="" />
            <h2>Seguimiento de progreso</h2>
            <p>
              Realiza un seguimiento del progreso detallado de estudiantes y docentes
            </p>
          </div>
          </NavLink>
          <NavLink to={"/savedtutos"}>
          <div className="img-container">
            <img src={Oip} alt="" />
            <h2>Generacion de Horarios</h2>
            <p>Genera horarios perzonalizados para las tutorias y reuniones academicas</p>
          </div>
          </NavLink>
        </div>
      </section>
      <footer>
        <h4>© 2023 Sistema de Control de Tutorías de Titulación - ULEAM</h4>
      </footer>
    </div>
  )
}

export default Principal