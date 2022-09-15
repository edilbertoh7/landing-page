import perfil from "../assets/img/perfil.jpeg";
import react from "../assets/img/react.png";
import js from "../assets/img/descarga.png";
import html from "../assets/img/html1.png";
import css3 from "../assets/img/css3.png";
import php from "../assets/img/php.png";
import python from "../assets/img/python.jpeg";
import laravel from "../assets/img/laravel.png";
import mysql from "../assets/img/mysql.png";
import mariadb from "../assets/img/mariadb.png";
import mongo from "../assets/img/mongo.png";
import aws from "../assets/img/aws.png";

const PerfilPage = () => {
    return (
        <>
            <div className=" row   p-2 mb-24">
                <div className="col p-6">
                    <div className=" p-2  text-white font-bold text-3xl">
                        <div className=" flex  justify-center mt-10 p-8 ">

                            {/*inicia tarjeta */}
                            <div className="p-6 w-4/5  rounded-lg border-5 border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                        Hagamos equipo !!
                                    </h5>
                                </a>
                                <p className="mb-3 mt-10 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                    Hola soy Edilberto <span className="text-6xl ml-6 mr-6" > 🤝</span>
                                    ya que estas aqui dejame mostrarte algo que podria interesarte
                                </p>
                                <p className=" mt-5 mb-3 font-bold  text-gray-900 text-4xl text-center dark:text-gray-400">
                                    si quieres podemos trabajar juntos!!
                                </p>
                            </div>
                        </div>
                        <div className=" flex  justify-center mt-2 p-8 ">
                            {/*inicia tarjeta max-w-sm */}
                            <div className="px-6 w-4/5  rounded-lg border-5 border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                <p className="mb-16 mt-10 font-bold text-4xl text-center text-gray-900 dark:text-gray-400">
                                    Frontend
                                </p>
                                <p className="mb-16 mt-10 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                    He desarrollado aplicaciones adaptables y escalables adaptadas para las necesidades del cliente
                                </p>
                                <div className="row mb-5">
                                    <div className="col">

                                        <img className="rounded-t-lg html" src={html} title="html" />
                                    </div>
                                    <div className="col">

                                        <img className="rounded-t-lg img-logos" src={css3} title="css3" />
                                    </div>
                                    <div className="col">
                                        <img className="rounded-t-lg img-logos" src={react} title="react" />
                                    </div>

                                    <div className="col">

                                        <img className="rounded-t-lg img-logos" src={js} title="avascript" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" flex  justify-center mt-2 p-8 ">
                            {/*inicia tarjeta max-w-sm */}
                            <div className="px-6 w-4/5  rounded-lg border-5 border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                <p className="mb-16 mt-10 font-bold text-4xl text-center text-gray-900 dark:text-gray-400">
                                    Bases de datos
                                </p>
                                <p className="mb-16 mt-10 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                    Manejo bases de datos relacionales y no relacionales
                                </p>
                                <div className="row mb-5">
                                    <div className="col">

                                        <img className="rounded-t-lg html" src={mysql} title="html" />
                                    </div>
                                    <div className="col">
                                        <img className="rounded-t-lg img-logos" src={mongo} title="react" />
                                    </div>
                                    <div className="col">

                                        <img className="rounded-t-lg img-logos" src={mariadb} title="css3" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*targeta centro */}
                <div className="col p-6 mb-5">
                    <div className=" mt-12 flex  justify-center  p-8 ">

                        {/*inicia tarjeta  */}
                        <div className="lg:px-6 w-4/5  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg border-5 border-gray-900" src={perfil} alt="" />
                        </div>
                    </div>
                    <div className=" flex  justify-center  p-8 ">

                        {/*inicia tarjeta max-w-sm */}
                        <div className="lg:px-6 w-4/5  rounded-lg border-5 border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                            <p className="mb-16 mt-16 px-2 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                He realizado el análisis y diseño de aplicaciones web durante tres años, lo cual me ha
                                permitido ganar experiencia en el uso de diferentes lenguajes de  programación
                            </p>
                        </div>
                    </div>

                </div>

                {/***targeta derecha */}
                <div className="col p-6">
                    <div className=" p-2  text-white font-bold text-3xl">
                        <div className=" flex  justify-center mt-10 p-8 ">

                            {/*inicia tarjeta max-w-sm */}
                            <div className="px-6 w-4/5  rounded-lg border-5 border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                <p className="mb-16 mt-10 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                    Soy un entusiasta amante de mi trabajo, me encanta hacer uso de la
                                    tecnología para ayudar a que las personas tengan una mejor calidad de vida
                                </p>
                            </div>
                        </div>
                        <div className=" flex  justify-center mt-2 p-8 ">

                            {/*inicia tarjeta max-w-sm */}
                            <div className="px-6 w-4/5  rounded-lg border-5 border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                <p className="mb-16 mt-10 font-bold text-center text-4xl text-gray-900 dark:text-gray-400">
                                    Backend
                                </p>
                                <p className="mb-16 mt-10 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                    He realizado la creación de soluciones de tipo API garantizando la fluidez en el envio y
                                    recepcion de informacion
                                </p>
                                <div className="row mb-5">
                                    <div className="col">

                                        <img className="rounded-t-lg  " src={php} title="php" />
                                    </div>
                                    <div className="col">
                                        <img className="rounded-t-lg" src={laravel} title="laravel" />
                                    </div>
                                    <div className="col">

                                        <img className="rounded-t-lg " src={python} title="python" />
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className=" flex  justify-center mt-2 p-8 ">

                            {/*inicia tarjeta max-w-sm */}
                            <div className="px-6 w-4/5  rounded-lg border-5 border-gray-900 shadow-xl dark:bg-gray-800 dark:border-gray-700">
                                <p className="mb-16 mt-10 font-bold text-center text-4xl text-gray-900 dark:text-gray-400">
                                    Infraestructura
                                </p>
                                <p className="mb-16 mt-10 font-normal text-4xl text-gray-900 dark:text-gray-400">
                                    creación y despliegue de proyectos de infraestructura como código CDK aws
                                </p>
                                <div className="row mb-5">
                                    <div className="col">

                                        <img className="rounded-t-lg  " src={aws} title="php" />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default PerfilPage