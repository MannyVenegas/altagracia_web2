import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const { register,reset, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post("http://localhost:3000/api/sendemail", data)
    reset();
  };


  return (
    <div id='contact' className='contact-us'>
      <div className='text-center'>
        <h1>Contacto</h1>
        <p>Escríbenos y obten tu presupuesto.</p>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='row'>
            <div className='col-md-10 co col-xs-12'>
              <div className='text-center'>
                <input type="text" className='form-input'
                  aria-invalid={errors.firstName ? "true" : "false"}
                  {...register("firstName", { required: "Este campo es obligatorio." })}
                  placeholder="Nombre" />
                <p>{errors.firstName?.message}</p>
              </div>
              <div className='text-center'>
                <input type="text" className='form-input'
                  aria-invalid={errors.lastName ? "true" : "false"}
                  {...register("lastName", { required: "Este campo es obligatorio." })}
                  placeholder="Apellido" />
                <p>{errors.lastName?.message}</p>
              </div>
              <div className='text-center'>
                <input id="phone" type="text" className='form-input'
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register("phone", { required: "Por favor ingresa tu número telefónico." })}
                  placeholder="Teléfono" />
                <p>{errors.phone?.message}</p>
              </div>
              <div className='text-center'>
                <input id="email" type="email" className='form-input'
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Ingresa tu correo por favor.",
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Mail invalido." }
                  })}
                  placeholder="Email" />
                <p>{errors.email?.message}</p>
              </div>
              <div className='text-center'>
                <input id="subject" type="text" className='form-input'
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("subject", { required: "Ingresa el asunto." })}
                  placeholder="Asunto" />
                <p>{errors.subject?.message}</p>
              </div>
              <div className='col-md-6 co col-xs-12'>
                <div className='text-center'>
                  <textarea id="description" type="text" className='form-input'
                    aria-invalid={errors.description ? "true" : "false"}
                    {...register("description", { required: "Ingresa la descripción.", minLength: { value: 20, message: "Por favor ingresa una descripción de más de 20 caracteres" } })}
                    placeholder="Descripción del trabajo"></textarea>
                  <p>{errors.description?.message}</p>
                  <button className='btn-contact-us' type='submit'>
                    Contáctanos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact