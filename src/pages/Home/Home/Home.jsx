import Banner from "../Banner/Banner";
import ToyTab from "../CategoryToy/ToyTab/ToyTab";
import Gallery from "../Gallery/Gallery";
import MarqueSlider from "../MarqueSlider/MarqueSlider";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MarqueSlider></MarqueSlider>
            <ToyTab></ToyTab>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;