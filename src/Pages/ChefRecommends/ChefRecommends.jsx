import { useEffect, useState } from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";
import ChefCard from "../ChefCard/ChefCard";

const ChefRecommends = () => {

    const [chefs, setChets] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const chefFoodItem = data.filter(chefItem => chefItem.category === 'salad')
            setChets(chefFoodItem);
        })
    },[])

    return (
        <section>
            <SectionTitle
                subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-12">
                {
                    chefs.map(chef => 
                    <ChefCard
                    key={chef._id}
                    chef={chef}
                    ></ChefCard> )
                }
            </div>
        </section>
    );
};

export default ChefRecommends;