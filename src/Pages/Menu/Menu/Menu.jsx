import { Helmet } from "react-helmet-async";
import Cover from "../../../components/SharedComponent/Cover";
import menuImg from '../../../assets/menu_images/banner3.jpg';
import SectionTitle from "../../../sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import pizzaImg from '../../../assets/menu_images/pizza-bg.jpg';
import dessertImg from '../../../assets/menu_images/dessert-bg.jpeg';
import soupImg from '../../../assets/menu_images/soup-bg.jpg';
import saladImg from '../../../assets/menu_images/salad-bg.jpg';
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [items] = useMenu();

    const offered = items.filter(item => item.category === 'offered');
    const pizza = items.filter(item => item.category === 'pizza');
    const desserts = items.filter(item => item.category === 'dessert');
    const soup = items.filter(item => item.category === 'soup');
    const salad = items.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            {/* cover image and title  */}
            <Cover
            coverImg={menuImg}
            Title="OUR MENU"
            h1="Would you like to try a dish?"
            ></Cover>
            {/* todays offer section  */}
            <SectionTitle
            subHeading="Don't miss"
            heading="TODAY'S OFFER"
            >
            </SectionTitle>
            <MenuCategory
             items={offered}
             btnTitle="ORDER YOUR FAVOURITE FOOD"
             ></MenuCategory>
             {/* desserts menu section  */}
             <MenuCategory
             items={desserts}
             img={dessertImg}
             title="Desserts"
             subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             btnTitle="ORDER YOUR FAVOURITE FOOD"
             ></MenuCategory>
             {/* pizza menu section  */}
             <MenuCategory
             items={pizza}
             img={pizzaImg}
             title="Pizza"
             subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             btnTitle="ORDER YOUR FAVOURITE FOOD"
             ></MenuCategory>
             {/* Salad menu section  */}
             <MenuCategory
             items={salad}
             img={saladImg}
             title="Salads"
             subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             btnTitle="ORDER YOUR FAVOURITE FOOD"
             ></MenuCategory>
             {/* soups menu section  */}
             <MenuCategory
             items={soup}
             img={soupImg}
             title="Soups"
             subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             btnTitle="ORDER YOUR FAVOURITE FOOD"
             ></MenuCategory>
        </div>
    );
};

export default Menu;