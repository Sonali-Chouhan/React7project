import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Delete_User } from "../Redux/Action/ActionSaga";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
const TableSaga = () => {
  var dispatch = useDispatch();
  let navigate = useNavigate();
  const obj = useSelector((state) => state.Fromreducer.item);
  useEffect(() => {}, [obj]);
  //delete button Here
  const handleDelete = (i) => {
    //toast.warn("Are you sure to delete this item?")

    toast.warn("DElete Item", {
      icon: "🤯",
    });
    dispatch(Delete_User(i));
  };
  //Edit button  Here
  const handleEdit = (id) => {
    navigate(`/userfrom/${id}`);
  };

  return (
    <div>
      <center>
        <h1>Table </h1>
        {obj ? (
          <div>
            <Table className="Tabledev" striped bordered hover variant="dark" >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th  colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {obj.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.number}</td>
                      <td>
                      <Button 
                          variant="warning"
                          onClick={() => handleDelete(i)}>Delete
                      </Button>
                      </td>
                      <td>
                      <Button 
                             variant="info"
                             onClick={() => handleEdit(i)}>Edit
                      </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
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
