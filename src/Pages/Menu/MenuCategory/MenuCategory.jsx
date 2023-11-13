import Cover from "../../../components/SharedComponent/Cover";
import MenuItem from "../../menuItem/MenuItem";



const MenuCategory = ({ items, btnTitle, img, title, subTitle }) => {
    return (
        <div className="my-20">
            <div className="mb-12">
                {title && <Cover coverImg={img} Title={title} h1={subTitle}
                ></Cover>}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    items.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                }
            </div>
            <div className="text-center mt-8">
                <button className=" border-b-4 btn-outline btn border-t-0 border-x-0 border-yellow-600">{btnTitle}</button>
            </div>
        </div>
    );
};

export default MenuCategory;