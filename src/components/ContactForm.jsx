import useForm from '../hooks/useForm'

function ContactForm() {
  const { values, handleChange, reset } = useForm({ nombre: '', mensaje: '' })

  function handleSubmit() {
    if (!values.nombre || !values.mensaje) return
    alert(`Enviado por: ${values.nombre}\n${values.mensaje}`)
    reset()
  }

  return (
    <div className="section">
      <h2>Formulario (useForm - Hook Personalizado)</h2>
      <div className="form-group">
        <input
          name="nombre"
          placeholder="Tu nombre"
          value={values.nombre}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={values.mensaje}
          onChange={handleChange}
          rows={3}
        />
        <div className="btn-row">
          <button onClick={reset}>Limpiar</button>
          <button className="primary" onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
