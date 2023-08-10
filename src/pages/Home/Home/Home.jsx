import useTitle from "../../../hooks/useTitle";
import Social from "../../Social/Social";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ToyTab from "../CategoryToy/ToyTab/ToyTab";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import MarqueSlider from "../MarqueSlider/MarqueSlider";
import OurBlog from "../OurBlog/OurBlog";
import OurClients from "../OurClients/OurClients";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import Services from "./Services/Services";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <MarqueSlider></MarqueSlider>
            <ToyTab></ToyTab>
            <Gallery></Gallery>
            <FeaturedItems></FeaturedItems>
            <OurClients></OurClients>
            <AboutUs></AboutUs>
            <OurBlog></OurBlog>
            <WhatWeDo></WhatWeDo>
            <Services></Services>
            <ContactUs></ContactUs>
            <Social></Social>
        </div>
    );
};

export default Home;