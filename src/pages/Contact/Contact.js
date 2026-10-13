
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


function Contact() {
    return ( <div className="Contact">
        <Navbar/>
        <ContactForm/>
        <Footer/>
    </div> );
}

export default Contact;