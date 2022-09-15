import { useState } from 'react'
import axios from "axios";

const API_URL = "https://telloapp-b8a8f-default-rtdb.firebaseio.com";

const ContactForm = ({ closeModalm }) => {

    const [Nombre, setNombre] = useState('');
    const [Celular, setCelular] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Mensaje, setMensaje] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        //   alert(Nombre)
        if ([Nombre, Celular, Correo, Mensaje].includes("")) {
            alert('entra')
            setError(true)
            return
        }
        setError(false)

        //alert(error)
        const today = new Date();

        // obtener la fecha y la hora
        const now = today.toLocaleString();
        console.log(now);

        const payload = {
            "Nombre": Nombre,
            "Celular": Celular,
            "Correo": Correo,
            "Mensaje": Mensaje,
            "fecha": now
        };

        axios.post(`${API_URL}/contact-form.json`, payload)
            .then(function (response) {
                console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            });
            
            closeModalm()
    }
    return (
        <>
            <div className="mt-7">
                <div className="">
                    <div className="">
                        <form onSubmit={handleSubmit} >

                            <div className=" text-start">
                                <label className=' text-1xl'>NOMBRES:{Nombre}</label>
                                <input className="form-control text-1xl " name="nombre" id="nombre" placeholder="Nombres" onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className='text-red-500 font-bold' >{Nombre == '' && error && ('Dejame tu nombre asi sera mas facil contactarte')}</div>

                            <div className="text-start">
                                <label className='text-1xl'>TELEFONO</label>
                                <input type="number" className="form-control text-1xl" name="celular" id="celular" placeholder="Celular" onChange={(e) => setCelular(e.target.value)} />
                            </div>
                            <div className='text-red-500 font-bold' >{Celular == '' && error && ('por favor ingresa tu numero de contacto')}</div>

                            <div className="text-start">
                                <label className='text-1xl'>CORREO</label>
                                <input type="email" className="form-control text-1xl" name="correo" id="correo" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
                            </div>
                            <div className='text-red-500 font-bold' >{Correo == '' && error && ('Por favor dejame tu correo para contactarte')}</div>

                            <div className="text-start">
                                <label className='text-1xl'>Deja tu Mensaje</label>
                                <textarea name="" id="" cols="20" rows="5"
                                    className='form-control text-1xl' onChange={(e) => setMensaje(e.target.value)}></textarea>
                            </div>
                            <div className='text-red-500 font-bold' >{Mensaje == '' && error && ('Aun no has escrito un mensaje')}</div>

                            <div className='mt-2' >

                                <input type="submit" className="w-20 h-8 rounded-full hover:bg-blue-500 bg-green-500 " name="boton" id="boton" value="ENVIAR" />

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm