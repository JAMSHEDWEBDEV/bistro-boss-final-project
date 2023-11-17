import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {

    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);
                userProfileUpdate(data.name, data.photo)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Your Registration is successful",
                                        showConfirmButton: false,
                                        timer: 2000
                                    });
                                    reset();
                                    navigate('/login');
                                }
                            })

                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Email is already used.Try another email",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
                reset();
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="">
                <div className="text-center my-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name"
                                {...register("name", { required: true })}
                                name="name" className="input input-bordered" />
                            {errors.name && <p className="text-red-600">Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: true })}
                                placeholder="email" name="email" className="input input-bordered" />
                            {errors.email && <p className="text-red-600">Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="photo"
                                {...register("photo", { required: true })}
                                placeholder="Your Photo" className="input input-bordered" />
                            {errors.photo && <p className="text-red-600">photo is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 15,
                                    pattern: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,15}$/
                                })}
                                className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">password must be at least 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">password must be less than 15 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">password must be one lowercase, one capital letter,one number,one special character and less than 15 characters</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="text-center"><SocialLogin></SocialLogin></div>
                    <div className='text-center mb-4'>
                        <p>Already have an account? <Link to="/login" className='text-xl text-yellow-600'>Login here..</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;