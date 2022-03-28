import React from "react";
import HomeSaga from "./Component/HomeSaga";
import FromSaga from "./Component/FromSaga";
import TableSaga from "./Component/TableSaga"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/userfrom">From</Link>
          <Link to="/usertable">Table</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomeSaga />} />
          <Route path="/userfrom" element={<FromSaga />} />
          <Route path="/usertable" element={<TableSaga/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

