import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import HomeSaga from "./Component/HomeSaga";
import FromSaga from "./Component/FromSaga";
import TableSaga from "./Component/TableSaga";
import ApiTable  from "./Component/ApiTable"
import 'react-toastify/dist/ReactToastify.css';
import About from "./Component/About";
import NoteState from "./Context/Node"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
      <ToastContainer/>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/userfrom">From</Link>
          <Link to="/usertable">user Table</Link>
          <Link to="/apitable">Api Table</Link>
          <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomeSaga />} />
          <Route path="/userfrom" element={<FromSaga />} />
          <Route path="/usertable" element={<TableSaga/>} />
          <Route path="/userfrom/:id" element={<FromSaga />} />
          <Route path="/apitable" element={<ApiTable/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      </NoteState>
    </div>
  );
}
export default App;

