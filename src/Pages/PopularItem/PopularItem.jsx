
import SectionTitle from "../../sectionTitle/SectionTitle";
import MenuItem from "../menuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularItem = () => {

    const [items] = useMenu();
    const popularItems = items.filter(item => item.category === 'popular');
    
    return (
        <section className="my-12">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItems.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                }
            </div>
            <div className="text-center mt-8">
                <button className=" border-b-4 btn-outline btn border-t-0 border-x-0 border-yellow-600">View full menu</button>
            </div>
        </section>
    );
};

export default PopularItem;