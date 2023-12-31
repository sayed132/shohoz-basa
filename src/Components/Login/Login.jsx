import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {

    const { register, formState: { errors } } = useForm();
   

    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl rounded-md'>
                <h2 className='text-xl text-center'>Login</h2>
                <form >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"  placeholder="example@gmail.com"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"  placeholder="example@...1234"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit"/>
                    {/* <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div> */}
                </form>
                <p className="mt-2">New to Shohoz Basa <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;