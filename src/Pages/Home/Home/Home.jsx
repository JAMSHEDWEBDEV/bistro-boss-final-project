
import { Helmet } from "react-helmet-async";
import CallNow from "../../CallNow/CallNow";
import Category from "../../Category/Category";
import ChefRecommends from "../../ChefRecommends/ChefRecommends";
import ChefService from "../../ChefService/ChefService";
import FeatureMenu from "../../OurFeature/FeatureMenu";
import PopularItem from "../../PopularItem/PopularItem";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularItem></PopularItem>
            <CallNow></CallNow>
            <ChefRecommends></ChefRecommends>
            <FeatureMenu></FeatureMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;