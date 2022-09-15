import { useState } from "react"

export const UseModal =(initilValue = false) =>{
const [isOpen, setIsOpen] = useState(initilValue)
//creo los metodos para abrir y cerrar el modal

const openModal = () => setIsOpen(true)
const closeModal = () => setIsOpen(false)

return[isOpen,openModal,closeModal];
}