import './App.css';
import React from 'react';
import EmployeeDetail from './EmployeeDetail';
import EditEmployee from './EditEmployee';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
function App(props) {
  return (
    <div className="App">
      <Router>
     <Routes>
          <Route exact path="/" element={<EmployeeDetail/>} />
          <Route exact path="/EditEmployee/editID/:id" element={<EditEmployee/>} />
    </Routes>
    </Router>
       
    </div>
  );
}

export default App;