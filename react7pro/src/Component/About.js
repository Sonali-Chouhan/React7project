import React,{useContext, useEffect} from 'react'
import NoteContext from '../Context/Context'

const About = () => {
    const a=useContext(NoteContext) 
    useEffect(()=>{
       console.log("bh",a)
    },[a])
    //handle submit function coll // a.handleSubmit //function
    a.handleSubmit()
  return (
    <div>
     <h1>About</h1>
     <p>{a.state.name}</p>



    </div>
  )
}

export default About;