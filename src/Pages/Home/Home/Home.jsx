
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