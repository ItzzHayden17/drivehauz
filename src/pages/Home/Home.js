import '../Home/Home.css'

import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Hero from '../../components/Hero/Hero'
import SearchSection from '../../components/SearchSection/SearchSection';
import Gallery from '../../components/Gallery/Gallery';
import WhyUs from '../../components/WhyUs/WhyUs';
import ClientReview from '../../components/ClientReview/ClientReview';
import Footer from '../../components/Footer/Footer';

function Home() {
    return ( 
        <div>
            <Navbar/>
            <Banner/>
            <Hero/>
            <Gallery/>
            <WhyUs/>
            <ClientReview/>
            <Footer/>

        </div>
     );
}

export default Home;