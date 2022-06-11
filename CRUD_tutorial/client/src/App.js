import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddEmployee from "./components/AddEmployee";
import EmployeeTable from "./components/EmployeeTable";
import Employee from "./components/Employee";

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/employees' className='navbar-brand'>
          Lindcode
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/employees'} className='nav-link'>
              Employees
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={"/add"} className='nav-link'>
              Add Employee
            </Link>
          </li>
        </div>
      </nav>
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<EmployeeTable />} />
          <Route path='/employees' element={<EmployeeTable />} />
          <Route path='/add' element={<AddEmployee />} />
          <Route path='/employees/:id' element={<Employee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
