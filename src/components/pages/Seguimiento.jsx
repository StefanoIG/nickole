import React from 'react'

const Seguimiento = () => {
  return (
    <div className='root'>
      <div className='card'>
        <h1>Seguimiento</h1>
        <h4>Informacion del estudiante</h4>
        <form action="">
          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder='Nombres'/>
          </div>
          <div>
            <label htmlFor="">Matricula</label>
            <input type="text" placeholder='Matricula'/>
          </div>
          <button>Siguiente</button>
        </form>
      </div>
    </div>
  )
}

export default Seguimiento