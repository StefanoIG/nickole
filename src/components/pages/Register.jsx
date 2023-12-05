import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({ // Asegúrate de que esta línea esté presente
    name: '',
    lastName: '',
    email: '',
    password: ''
  });

  const isNameValid = (name) => /^[a-zA-Z ]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNameValid(dataForm.name) || !isNameValid(dataForm.lastName)) {
      alert("El nombre y los apellidos solo deben contener letras.");
      return;
    }
  
    // Intenta obtener los usuarios actuales, asegurándote de que sea un array
    let currentUsers = JSON.parse(localStorage.getItem('userData'));
    if (!Array.isArray(currentUsers)) {
      currentUsers = []; // Si no es un array, inicializa como un array vacío
    }
  
    currentUsers.push(dataForm);
    localStorage.setItem('userData', JSON.stringify(currentUsers));
    alert("Te has registrado con éxito");
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm(prevState => ({ ...prevState, [name]: value })); // Asegúrate de que esta línea esté presente
  };

  return (
    <main>
      <div className='form-container'>
        <h1>Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombres</label>
            <input type="text" required id='name' name='name' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="lastName">Apellidos</label>
            <input type="text" required id='lastName' name='lastName' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" required id='email' name='email' onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password' name='password' required onChange={handleChange} />
          </div>
          <button type='submit'>Registrarse</button>
        </form>
        <p>Ya tienes una cuenta?</p>
        <span><NavLink to={"/login"}>Inicia sesión</NavLink></span>
      </div>
    </main>
  );
};

export default Register;
