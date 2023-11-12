import SectionTitle from "../../sectionTitle/SectionTitle";
import featureImg from '../../assets/images/featured.jpg';
import './Feature.css';
const FeatureMenu = () => {
    return (
        <section className="feature_bg bg-fixed my-24">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="flex flex-col lg:flex-row gap-6 items-center w-4/5 mx-auto">
                <div className=" flex-1">
                    <img className="border-4" src={featureImg} alt="image" />
                </div>
                <div className=" flex-1 text-white border-l-2 p-2 bg-slate-500 bg-opacity-50">
                    <h1 className="font-bold text-2xl">March 20, 2023</h1>
                    <h3 className="my-2 font-bold">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div className="mt-12">
                        <button className="btn btn-outline text-white font-bold border-x-0 border-t-0 border-b-4 border-yellow-600">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureMenu;