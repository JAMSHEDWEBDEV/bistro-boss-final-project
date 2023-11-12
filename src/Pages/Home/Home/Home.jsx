
import Category from "../../Category/Category";
import ChefService from "../../ChefService/ChefService";
import PopularItem from "../../PopularItem/PopularItem";
import Banner from "../Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularItem></PopularItem>
        </div>
    );
};

export default Home;