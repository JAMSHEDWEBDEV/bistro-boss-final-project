
const ChefCard = ({ chef }) => {
    const { image, name, recipe } = chef || {};
    return (
        <div>
            <div className="card h-[450px] border-2 bg-base-100 shadow-xl p-2">
                <figure className="py-10">
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center bg-slate-300">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-b-4 border-x-0 border-t-0 border-b-yellow-600">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;