import { Link, NavLink } from "react-router-dom"

const NavbarPage = () => {
    return (
        <nav className=" navbared navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
            <div className="container-fluid">
                <div className=" w-3/5  navbar-brand" ></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">

                        <NavLink className={({ isActive }) =>
                            `bg-gray-500  
                            text-gray-200  rounded-lg w-40 p-2 ml-5 mt-2 mb-2 text-3xl  font-bold
                            hover:bg-black hover:text-white
                            ${isActive ? "bg-black text-white" : ""}`}
                            to="/perfil">
                            Perfil
                        </NavLink>

                        <NavLink className={({ isActive }) =>
                            `bg-gray-500  
                            text-gray-200  rounded-lg w-40 p-2 ml-5 mt-2 mb-2 text-3xl  font-bold
                            hover:bg-black hover:text-white
                            ${isActive ? "bg-black text-white" : ""}`}
                            to="/estudios">
                            Estudios
                        </NavLink>

                        <NavLink className={({ isActive }) =>
                            `bg-gray-500  
                            text-gray-200  rounded-lg w-80 p-2 ml-5 mt-2 mb-2 text-3xl  font-bold
                            hover:bg-black hover:text-white
                            ${isActive ? "bg-black text-white" : ""}`}
                            to="/explaboral">
                            Experiencia laboral
                        </NavLink>

                        <NavLink className={({ isActive }) =>
                            `bg-gray-500  
                            text-gray-200  rounded-lg w-40 p-2 ml-5 mt-2 mb-2 text-3xl  font-bold
                            hover:bg-black hover:text-white
                            ${isActive ? "bg-black text-white" : ""}`}
                            to="/portafolio">
                            Portafolio
                        </NavLink>                       
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavbarPage