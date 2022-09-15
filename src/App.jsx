import { Route, Routes } from "react-router-dom"
import ContactoPage from "./components/ContactoPage"
import EstudiosPage from "./components/EstudiosPage"
import ExperienciaPage from "./components/ExperienciaPage"
import PerfilPage from "./components/PerfilPage"
import PortafolioPage from "./components/PortafolioPage"



function App() {


  return (
    <>
      <Routes>
        <Route>
          <Route path="perfil" element={<PerfilPage />} />
          <Route path="estudios" element={<EstudiosPage />} />
          <Route path="explaboral" element={<ExperienciaPage />} />
          <Route path="portafolio" element={<PortafolioPage />} />
          <Route path="/*" element={<PerfilPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
