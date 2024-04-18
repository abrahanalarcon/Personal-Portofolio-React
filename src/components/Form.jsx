import { useState, useEffect } from 'react';

const Form = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    telefono: ''
  });
  const [alerta, setAlerta] = useState(null);

  useEffect(() => {
    if (alerta) {
      const timeout = setTimeout(() => {
        setAlerta(null);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [alerta]);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, mensaje, telefono } = datos;
    if (nombre === '' || email === '' || mensaje === '' || telefono === '') {
      mostrarAlerta('Todos los campos son obligatorios', true);
      return;
    }

    // Lógica para enviar el formulario aquí...
  
    mostrarAlerta('Mensaje enviado correctamente');
    console.log('enviado correctamente')
  };

  const mostrarAlerta = (mensaje, error = false) => {
    setAlerta({ mensaje, error });
    console.log('todos los campos son obligatorios')
  };

  return (
    <div>
      <h2 className="centrar-texto">Meet</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact us by filling out these fields</legend>

          <div className="contenedor-campos">
            <div className="campo">
              <label htmlFor="nombre">Name</label>
              <input
                type="text"
                className="input-text"
                placeholder="Tu Nombre"
                id="nombre"
                value={datos.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="campo">
              <label htmlFor="telefono">Phone</label>
              <input
                type="tel"
                className="input-text"
                id="telefono"
                placeholder="Tu Teléfono"
                value={datos.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="campo">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input-text"
                id="email"
                placeholder="Tu correo"
                value={datos.email}
                onChange={handleChange}
              />
            </div>

            <div className="campo">
              <label htmlFor="mensaje">Message</label>
              <textarea
                className="input-text"
                id="mensaje"
                cols="30"
                rows="10"
                value={datos.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="alinear-derecha flex">
            <input type="submit" className="boton w-sm-100" value="Send" />
          </div>
        </fieldset>
        {alerta && (
        <div className={`alerta ${alerta.error ? 'error' : 'correcto'}`}>
          {alerta.mensaje}
        </div>
      )}
      </form>

      {/* Renderizar la alerta si existe */}
      
    </div>
  );
};

export default Form;

