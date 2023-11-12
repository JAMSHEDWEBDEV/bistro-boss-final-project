
const MenuItem = ({item}) => {
    const {image, recipe,name,price} = item || {};
    return (
        <div className="flex space-x-5">
            <div>
                <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="image" />
            </div>
            <div>
                <h1 className="uppercase">{name}---------------</h1>
                <p>{recipe}</p>
            </div>
            <div className="text-yellow-600 text-xl font-bold">
                ${price}
            </div>
        </div>
    );
};

export default MenuItem;