import React from 'react'
import "./tutorias-registradas.css";
import { NavLink } from 'react-router-dom';

const TutoriasRegistradas = () => {
  const data = JSON.parse(localStorage.getItem("tutoriaData"))
  return (
    <section className='root'>
      <div className='tutoria-container'>
        {data ? (
          <>
          <h1>Tutorias Asignadas</h1>
          <div>
          {data.map((item)=> {
            <ul key={item.tutor}>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.cell}</li>
              <li>{item.hora}</li>
              <li>{item.tema}</li>
              <li>{item.tutor}</li>
            </ul>
        })}
        </div></>
      
        ) : (
          <div>
            <h2>No hay tutorias registradas</h2>
            <NavLink to={"/"}>Regresar</NavLink>
          </div>
          )}
      </div>
    </section>
  )
}

export default TutoriasRegistradas