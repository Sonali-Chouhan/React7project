import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TableSaga = () => {
  //const data = useSelector((state) => state.ListReducer.List);
  const item = useSelector((state) => state.sagaReducer.Data);
  console.log("Data",item)
  
  
  useEffect(()=>{
  
  },[item])

  return (
    <div>
      <center>
        <h1>table</h1>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>title</th>
            <th>Body</th>
          </tr>
          </thead>
          <tbody>
          { 
           item.map((item,id)=>{
           
             return(
               
               <tr key={id}>
                 <td>{item.userId}</td>
                 <td>{item.id}</td>
                 <td>{item.title}</td>
                 <td>{item.body}</td>
               </tr>
             )

           })
          }
          </tbody>
      </table>
      </center>





    </div>
  )
}

export default TableSaga