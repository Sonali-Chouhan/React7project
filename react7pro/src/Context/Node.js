import React,{useState} from "react";
import NoteContext from "./Context";
 const NoteState=(props)=>{
    const [user, setuser] = useState({});
    const [data, setdata] = useState([]);
    // const handleChange = (event) => {
    //     setuser({
    //       ...user,
    //       [event.target.name]: event.target.value,
    //     });
    //     console.log(6666, user);
    //   };
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
       
       
    //     data.push({
    //       name: user.name,
    //     });
     
    //     setdata(data);
      
    //   };
   const  state={
        name:"sonali"
    }
    const handleSubmit =(allData)=>{

    }

    const allData ={
      state:state,
      handleSubmit:handleSubmit
    }

 return(
     <div>
           {/* <form onSubmit={handleSubmit}>
       
          <label htmlFor="UserName">Name </label>
          <input
           
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter User Name"
          />
          <input type="submit" value="submit" />
        </form> */}
          <NoteContext.Provider value={allData}>
              {props.children}
          </NoteContext.Provider>


     </div>
 )

 }
 export default NoteState;