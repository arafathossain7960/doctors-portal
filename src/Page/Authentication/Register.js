import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {createUser} =useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const handleSignup = (data) =>{
        const email = data.email;
        const password = data.password;
        createUser(email, password)
        .then(result=>{
            console.log(result)
        })
        .catch(error => {
            console.log(error.massage)
        })
       
        reset();
    }
    return (
 <div className='h-[500px] flex justify-center items-center'>
     <div className='w-96 p-7'>
        
         <form onSubmit={handleSubmit(handleSignup)}>
            <h3 className='text-center text-xl mb-3'>Signup</h3>
           <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">Full name</span>
            </label>
                <input type="text"  name='fullName' {...register("fullName")} className="input input-bordered w-full " />
        </div>

        
           <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
                <input  type="email" name='email'  {...register("email")} className="input input-bordered w-full " />
           
        </div>

           <div className="form-control w-full ">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
                <input type="Password" name='password'  {...register("password")} className="input input-bordered w-full " />
            <label className="label">
            <span className="label-text-alt text-sm">Forgot password</span>
            </label>
        </div>
               
                <input type="submit" className='btn btn-accent w-full' />
                </form>
                <p className='text-center my-2 text-sm'>I have an account <Link className='text-primary' to='/login'>Please, login</Link></p>

                <input type="submit" value='Signup with google' className='btn btn-outline w-full' />
    </div>

</div>
    );
};

export default Register;