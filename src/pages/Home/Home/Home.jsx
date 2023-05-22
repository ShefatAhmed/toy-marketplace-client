import useTitle from "../../../hooks/useTitle";
import Social from "../../Social/Social";
import Banner from "../Banner/Banner";
import ToyTab from "../CategoryToy/ToyTab/ToyTab";
import Gallery from "../Gallery/Gallery";
import MarqueSlider from "../MarqueSlider/MarqueSlider";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <MarqueSlider></MarqueSlider>
            <ToyTab></ToyTab>
            <Gallery></Gallery>
            <Social></Social>
        </div>
    );
};

export default Home;