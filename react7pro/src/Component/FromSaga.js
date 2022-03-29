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
          {errors.name && <p>This is required.</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter User Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "Email Address is required"}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter User Password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && "Password  required"}
        </div>
        {
          id ?
          (
            <span>
              <button type="submit">Save</button>{' '}
              <button type="button"
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
