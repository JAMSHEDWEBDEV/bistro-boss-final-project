
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const capchaRef = useRef();
    const [disable,setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            if(result){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Login is successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            }
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleCapchaValidation = () => {
        const user_captcha_value = capchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
            alert('Captcha Matched successfully');
        }

        else {
            alert('Captcha Does Not Match');
            setDisable(true);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="">
                <div className="text-center my-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={capchaRef} placeholder="Type capcha" name="capcha"
                                className="input input-bordered" required />
                            <button onClick={handleCapchaValidation} className='btn btn-outline btn-xs mt-4'>Capcha Validation</button>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disable} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='text-center mb-4'>
                        <p>New User? <Link to="/register" className='text-xl text-yellow-600'>Register here..</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;