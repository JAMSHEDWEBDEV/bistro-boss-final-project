
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ Food }) => {

    const { image, name, recipe, price,_id } = Food || {};

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //data send to databas
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            } 

            axiosSecure.post('/carts', cartItem)
           .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title:`${name} added to you cart `,
                    showConfirmButton: false,
                    timer: 2000
                  });
                //   refetch the cart 
                refetch();
            }
           });
            

        }else{
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state: location.pathname});
                }
            });
        }
    }

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
                    <button
                    onClick={handleAddToCart}
                     className="btn btn-outline border-0 border-b-4 border-yellow-600">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;