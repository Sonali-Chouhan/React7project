import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux'

//  main form
const FromC = () => {
  const { register,formState:{errors}, handleSubmit,setValue} = useForm();
  // let navigate = useNavigate();
  // let dispatch=useDispatch();
  //submit 
  const handleRegistration = (user) => {
    console.log("user",user)
    
  }

  return (
    <div className="FromC">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>Name</label>
          <input type="text" 
                 name="name" 
                 placeholder="Enter User Name" 
                 {...register("name",{ required: true })} />
                 {errors.name && <p>This is required.</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" 
                 name="email" 
                 placeholder="Enter User Email" 
                 {...register("email",{required:true})} />
                   {errors.email?.type === 'required' && "Email Address is required"}
        
        </div>
        <div>
          <label>Password</label>
          <input type="password"  
                 name="password" 
                 placeholder="Enter User Password" 
                 {...register("password",{required:true})} />
                {errors.password?.type === 'required' && "Password  required"}
          
        </div>
        <input type="submit" name="Submit" />
          
      
    </form>
      
    </div>
  );
};

export default FromC;
