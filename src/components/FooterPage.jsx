import twiter from "../assets/img/Twitter.webp";
import wapp1 from "../assets/img/wapp1.webp";
import face from "../assets/img/face.png";
import instagram from "../assets/img/instagram.webp";
import { UseModal } from "../modal/UseModal";
import ModalForm from "../modal/ModalForm";
import ContactForm from "./formularios/ContactForm";

const FooterPage = () => {
    const twitterevent = () => {
        alert("twitter")
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

                    <div className="w-16 h-16   ">
                        <img className="rounded-t-lg wapp1" src={wapp1} alt="" />
                    </div>
                    <div className=" ml-3 w-16 h-16   ">
                        <img className="rounded-t-lg wapp1" src={instagram} alt="" />
                    </div>

                    <div className=" ml-3 w-16 h-16   ">
                        <img className="rounded-t-lg wapp1" src={face} alt="" />
                    </div>
                    <div className=" ml-3 w-16 h-16 bg-white rounded-full  ">
                        <img className="rounded-t-lg wapp1 twit " onClick={twitterevent} src={twiter} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default FooterPage