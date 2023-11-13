
const FoodCard = ({ Food }) => {

    const { image, name, recipe, price } = Food || {};

    return (
        <div className="card bg-base-100 border-2 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="image" className="rounded-xl" />
            </figure>
            <p className="text-xl text-white px-4 rounded-2xl font-bold absolute top-10 right-12 bg-slate-600">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 border-yellow-600">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;