import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const ApiTable = () => {
  const item = useSelector((state) => state.sagaReducer.Data);
  const item_list = item.data;

  console.log("api data", item_list);
  useEffect(() => {}, [item]);

  return (
    <div>
      <center>
        <h1>API Table</h1>
        {item_list ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>User_ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {item_list.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
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

export default ApiTable;
