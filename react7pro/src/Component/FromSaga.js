import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { get_user,Updata_User } from "../Redux/Action/ActionSaga";
import {toast}   from "react-toastify"
//  main form
const FromC = () => {
  const {register, formState: { errors },handleSubmit,setValue} = useForm();
  let navigate = useNavigate();
  let { id } = useParams();
  let dispatch = useDispatch();
  var data=useSelector((state) => state.Fromreducer.item);
  
  //Submit button Code Here
  const handleRegistration = (user) => {
    if(id){
      dispatch(Updata_User(id,user))
      toast.success("Successfully Update", {
        icon: "🟢",
      });
       }else{
        dispatch(get_user(user));
        toast.success("Successfully Submit", {
          icon: "🚀"
        });
      }
      
    navigate("../usertable");
   
  };
  const handleCancel=()=>{
    navigate("../userfrom")
  }
  //Edit Function Here
  useEffect(()=>{
    var item=data[id]
   
    if(item){
      setValue("name",item.name)
      setValue("email",item.email)
      setValue("password",item.password)
      setValue("number",item.number)
    }
  },[])

  return (
    <div className="FromC">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter User Name"
            {...register("name", { required: true })}
          />
          <p className="error"> {errors.name && <p>This is required.</p>}</p>
          
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter User Email"
            {...register("email", { required: true ,pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,}
              
            })}
            
          />
          <p className="error">{errors.email?.type === "required" && "Email Address is required"}</p>
          <p  className="error">{errors.email?.type === "pattern" && "must add Valid email"}</p>
         
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter User Password"
            {...register("password", { required: true })}
          />
         <p className="error">{errors.password?.type === "required" && "Password  required"}</p> 
        </div>
        <div>
          <label>Contact</label>
          <input
            type="number"
            name="number"
            placeholder="Enter User Password"
            {...register("number", { required: true,minLength:10,maxLength: 10})}
          />
          <p className="error">  {errors.number?.type === "required" && "Number required"}</p>
          <p className="error">  {errors.number?.type=== "minLength" && "Valid Number"}</p>
         
         
        </div>
        {
          id ?
          (
            <span>
              <button type="submit">Save</button>{' '}
              <button type="submit"
              onClick={handleCancel}>Cancel</button>
            </span>
           )
         
          :
          <input type="submit" name="Submit" />
          
        }
      </form>
    </div>
  );
};

export default FromC;
