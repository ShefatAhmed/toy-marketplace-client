import Banner from "../Banner/Banner";
import ToyTab from "../CategoryToy/ToyTab/ToyTab";
import Gallery from "../Gallery/Gallery";
import MarqueSlider from "../MarqueSlider/MarqueSlider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MarqueSlider></MarqueSlider>
            <ToyTab></ToyTab>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;