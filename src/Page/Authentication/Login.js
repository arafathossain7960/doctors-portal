import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, reset, formState: {errors} } = useForm();

    const loginSubmit = data =>{
        console.log(data)

        reset();
    }
    return (
        <div className='flex  justify-center items-center h-[500px] shadow'>
           <div className='w-96 p-8'>
            <h3 className='text-center'>Login</h3>
     <form onSubmit={handleSubmit(loginSubmit)}>
         <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email"  {...register("email", {required:true})}  className="input input-bordered w-full " />
            {errors.email?.type === 'required' && <p className='text-red-400 my-2' role="alert">Email is required</p>}
        </div>
         <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password"  {...register("password", {required:true})}  className="input input-bordered w-full " />
            <label className="label">
                <span className="label-text text-sm"><Link>Forgot password</Link></span>
            </label>
            {errors.password?.type === 'required' && <p role="alert" className='text-red-400'>Password is required</p>}
        </div>


            <input type="submit" className='w-full input-bordered btn btn-accent' value='Submit' />
        </form>

        <p className='my-4 text-sm'>New to doctors portal <Link className='text-secondary' to='/register'>Create account</Link></p>
        <div className="divider">OR</div>
        <button className='btn btn-outline text-upper  w-full'>continue with google</button>
           </div>
        </div>
    );
};

export default Login;