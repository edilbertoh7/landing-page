
import { useState, useEffect } from "react";
import git from "../assets/img/git.png";
import landingApi from "../api/LandingApi";

const PortafolioPage = () => {
    const [getLanding, setGetLandig] = useState([])
    console.log(getLanding);

    useEffect(() => {
        obtenerPortafolio()
    }, [])

    const obtenerPortafolio = async () => {

        try {
            const respuesta = await landingApi.get('/landing');
            setGetLandig(respuesta.data[0].portafolio)
            //console.log(respuesta.data[0].portafolio);
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
                <div className="lg:col lg:p-4 mt-2">
                    <div className=" lg:p-20  text-white font-bold text-3xl lg:grid grid-cols-2 gap-4">
                        {getLanding.map((portafolio) => (
                            <div key={portafolio.id} className=" bg-gray-500 flex shadow-2xl justify-center lg:ml-12 mt-5 p-4 rounded-3xl  ">

                                {/*inicia tarjeta */}
                                <div className=" lg:mt-20  rounded-lg  ">
                                    <div>
                                        <div className="mb-10 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                            {portafolio.nombre}
                                        </div>
                                    </div>


                                    <div className="">
                                        <div className=" w-20"> </div>


                                        <div className=" font-normal text-4xl text-gray-900 dark:text-gray-400">
                                            <img className={`${portafolio.clase} rotate-12`} src={portafolio.imagen} alt="" />
                                            
                                        </div>

                                        <div className=" w-20"> </div>
                                    </div>



                                    <div className=" mt-5 mb-3 font-bold  text-gray-900 text-4xl text-center dark:text-gray-400">
                                        <div className="grid grid-cols-2">

                                            <div className="mr-32 lg:ml-20 text-3xl  bg-white rounded-2xl w-48">

                                                <a href={portafolio.v_previa} target="_blank" className=" w-48 rounded-2xl  text-white " >
                                                    <button className="h-16 bg-blue-600 w-48 rounded-2xl">

                                                        Vista Previa
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="ml-7 lg:ml-16" >
                                                <a href={portafolio.gitrepo} target="_blank" className=" bg-blue-600 w-40 h-16 rounded-2xl grid grid-cols-2 ">
                                                    <div className="mt-3 text-3xl text-white">
                                                        Git
                                                    </div>
                                                    <div>
                                                        <img className="git mt-2" src={git} alt="" />
                                                    </div>
                                                </a>

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
export default PortafolioPage