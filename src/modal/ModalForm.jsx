import { } from "./modal.css";
const ModalForm = ({ children, isOpen, closeModal }) => {


   return (
      <article className={`modal  ${isOpen && "is-open"}`} >
         <div className="modal-container lg:ml-96 lg:mt-32 bg-gray-700" >
            <button className="modal-close text-5xl bg-red-600 text-white hover:bg-blue-300 hover:text-red-600 font-bold" onClick={closeModal} >X</button>
            {children}
            
         </div>

      </article>
   )
}
export default ModalForm