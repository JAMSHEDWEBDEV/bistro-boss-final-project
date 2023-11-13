import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({FoodItems}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    FoodItems.map(Food =>
                        <FoodCard
                            key={Food._id}
                            Food={Food}
                        ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;