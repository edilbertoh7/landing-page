import { useState } from 'react'
//import './css/formulario.css'
import Errores from './Errores';
const ContactForm = () => {

    const [Nombre, setNombre] = useState('');
    const [Celular, setCelular] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Cumple, setCumple] = useState('');

    const [error, setError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        if ([Nombre, Celular, Correo, Cumple].includes("")) {
            setError(true)
            return
        }
        setError(false)
        alert(error)

    }
    return (
        <>
            <div className="mt-10">
                <div className="">
                    <div className="">
                        <form onSubmit={handleSubmit} >

                            <div className=" text-start">
                                <label className=' text-xl'>😎NOMBRES</label>
                                <input className="form-control text-3xl " name="nombre" id="nombre" placeholder="Nombres" onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className='individual-error' >{Nombre == '' && error && ('El campo Nombre es obligatorio')}</div>

                            <div className="text-start">
                                <label className='text-xl'>📞TELEFONO</label>
                                <input type="number" className="form-control" name="celular" id="celular" placeholder="Celular" onChange={(e) => setCelular(e.target.value)} />
                            </div>
                            <div className='individual-error' >{Celular == '' && error && ('El campo Celular es obligatorio')}</div>


                            <div className="text-start">
                                <label className='text-xl'>📧CORREO</label>
                                <input type="email" className="form-control" name="correo" id="correo" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
                            </div>
                            <div className='individual-error text-red-500 font-bold' >{Correo == '' && error && ('El campo Correo electronico es obligatorio')}</div>

                            <div className="text-start">
                                <label className='text-xl'>📧CORREO</label>
                                <textarea name="" id="" cols="40" rows="10"
                                    className='form-control'></textarea>
                            </div>
                            <br />

                            <div >

                                <input type="submit" className=" bg-red-500 " name="boton" id="boton" value="ENVIAR" />

                            </div>
                        </form>

                    </div>

                    {/*segundo card*/}


                </div>

            </div>
        </>
    )
}

export default ContactForm