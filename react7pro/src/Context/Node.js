import React,{useState} from "react";
import NoteContext from "./Context";
 const NoteState=(props)=>{
    const [user, setuser] = useState({});
    const [data, setdata] = useState([]);
    
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
       
          <NoteContext.Provider value={allData}>
              {props.children}
          </NoteContext.Provider>


     </div>
 )

 }
 export default NoteState;