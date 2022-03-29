import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Delete_User } from "../Redux/Action/ActionSaga";
import {toast} from "react-toastify"
const TableSaga = () => {
  var dispatch = useDispatch();
  let navigate = useNavigate();
  const obj = useSelector((state) => state.Fromreducer.item);
  useEffect(() => {}, [obj]);
  //delete button Here
  const handleDelete = (i) => {
    
    //toast.warn("Are you sure to delete this item?")
  
    toast.warn("DElete Item")
    dispatch(Delete_User(i));
  
  };
  //Edit button  Here
  const handleEdit = (id) => {
    navigate(`/userfrom/${id}`);
  };

  return (
    <div>
      <center>
        <h1>table</h1>
        {obj ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {obj.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        <button 
                        onClick={() => handleDelete(i)}>Delete</button>
                      </td>
                      <td>
                        <button onClick={() => handleEdit(i)}>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <p className="error">Record Not Found</p>
          </div>
        )}
      </center>
    </div>
  );
};

export default TableSaga;
