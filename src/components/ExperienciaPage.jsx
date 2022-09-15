import { useState, useEffect } from "react";

import landingApi from "../api/LandingApi";

const ExperienciaPage = () => {

    const [getLanding, setGetLandig] = useState([])
    console.log(getLanding);

    useEffect(() => {
        obtenerExperiencia()
    }, [])

    const obtenerExperiencia = async () => {

        try {
            const respuesta = await landingApi.get('/landing');
            setGetLandig(respuesta.data[0].explaboral)
            //console.log(respuesta.data[0].explaboral);
            getLanding.map((landing) => {
                //console.log(landing.backend[0].lenguaje);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className=" row   p-2 mb-24">
                <div className="lg:col lg:p-40 mt-20">
                    <div className=" lg:p-20  text-white font-bold text-3xl lg:grid grid-cols-2 gap-4">
                        {getLanding.map((explaboral) => (
                            <div key={explaboral.id} className=" bg-gray-500 flex shadow-2xl justify-center lg:ml-12 mt-5 p-4 rounded-3xl  ">

                                {/*inicia tarjeta */}
                                <div className=" lg:mt-20  rounded-lg  ">
                                    <div>
                                        <div className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                            {explaboral.empresa}
                                        </div>
                                        <div className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                            {explaboral.anio}
                                        </div>
                                        
                                    </div>


                                    <div className="grid grid-cols-3">
                                        <div></div>
                                        <div className="mb-3 mt-10 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                            <img className="mr-20 img-explaboral" src={explaboral.logo} alt="" />
                                        </div>
                                        <div></div>
                                    </div>

                                    <div className=" mt-5 mb-3 font-bold  text-gray-900 text-4xl  dark:text-gray-400">
                                        <div className="">

                                            <div className="text-center mb-5">
                                                {explaboral.cargo}
                                            </div>
                                            <div>

                                                {explaboral.descripcion}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                        <div className="mb-48"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ExperienciaPage