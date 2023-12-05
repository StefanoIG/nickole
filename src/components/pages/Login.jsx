import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Obtener los usuarios registrados del localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // Asegurarse de que registeredUsers sea un arreglo
    if (Array.isArray(registeredUsers)) {
      // Buscar un usuario que coincida con el email y la contraseña
      const user = registeredUsers.find(user => user.email === dataForm.email && user.password === dataForm.password);

      if (user) {
        // Si el usuario existe y la contraseña coincide
        localStorage.setItem('loggedIn', true);
        alert('Inicio de sesión exitoso');
        navigate('/'); // Redireccionar a la página principal
      } else {
        // Si no se encuentra el usuario o la contraseña no coincide
        alert('Correo electrónico o contraseña incorrectos');
      }
    } else {
      alert("Error en la base de datos de usuarios.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (

    <main>
      <div className='form-container'>
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" id='email' name='email' value={dataForm.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password' name='password' value={dataForm.password} onChange={handleChange} required />
          </div>
          <button type='submit'>Iniciar Sesion</button>
        </form>
        <p>No tienes cuenta?</p>
        <span><NavLink to={"/register"}>Registrate</NavLink></span>
      </div>
    </main>
  );
};

export default Login;
