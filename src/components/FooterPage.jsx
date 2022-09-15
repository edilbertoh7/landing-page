
import { UseModal } from "../modal/UseModal";
import ModalForm from "../modal/ModalForm";
import ContactForm from "./formularios/ContactForm";
import { useState, useEffect } from "react";
import landingApi from "../api/LandingApi";

const FooterPage = () => {
    const [getLanding, setGetLandig] = useState([])
    //console.log(getLanding);

    useEffect(() => {
        obtenerPortafolio()
    }, [])

    const obtenerPortafolio = async () => {

        try {
            const respuesta = await landingApi.get('/landing');
            setGetLandig(respuesta.data[0].redes)
            //console.log(respuesta.data[0].portafolio);
            
        } catch (error) {
            console.log(error);
        }
    }

    const [isOpenm, openModalm, closeModalm] = UseModal(false)
    return (

        <div className="footer bg-dark bg-gradient">

            <ModalForm isOpen={isOpenm} closeModal={closeModalm} >
                <ContactForm closeModalm={closeModalm} />
            </ModalForm>
            <div className="row">
                <div className="w-1/5"></div>

                <div className="col lg:text-3xl mr-5 mt-3">edilbertoh7@gmail.com</div>
                <div className=" col flex justify-end lg:text-3xl mt-2 animate__animated animate__infinite animate__pulse">

                    <button onClick={openModalm}
                        className=" lg:w-48 sm:w-40 mr-9 bg-gray-500 hover:bg-black text-gray-200 hover:text-white rounded-lg p-2 ml-5 mt-2 mb-2 lg:text-3xl  font-bold" >
                        Contactame
                    </button>
                </div>

                <div className="col flex justify-start ml-28">
                    {getLanding.map((redes) => (

                        <div key = {redes.id} className="w-16 h-16   ">
                            <a href={redes.url} target="_blanck" >

                                <img className="rounded-t-lg wapp1 twit" src={redes.logo} alt="" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default FooterPage