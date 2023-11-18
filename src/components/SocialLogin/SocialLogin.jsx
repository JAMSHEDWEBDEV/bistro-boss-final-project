import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {

    const axiosPublic = useAxiosPublic();
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/');

                    });
            })
            .catch(error => {
                if (error.code === 'auth/popup-closed-by-user') {
                    console.log('User closed the popup');
                    // Handle this case as per your application's requirement
                } else {
                    console.error('Error:', error);
                    // Handle other errors here
                }
            });
    };

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                <FaGoogle></FaGoogle>
                Google</button>
        </div>
    );
};

export default SocialLogin;