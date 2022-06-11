import React, { useState, useEffect } from "react";
import EmployeeService from "../services/employee.service";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const response = await EmployeeService.getAll("");
    setEmployees(response.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
      <div>
          <table>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Salary</th>
                  <th>Operations</th>
              </tr>
              {employees.map((val, key) => {
                  return (
                      <tr key={key}>
                          <td>{val.first_name}</td>
                          <td>{val.last_name}</td>
                          <td>{val.email}</td>
                          <td>{val.phone}</td>
                          <td>{val.salary}</td>
                          <td className="operations">
                              <button onClick={() => EmployeeService.deleteById(val.id)}>
                                  Delete
                              </button>
                          </td>
                      </tr>
                  )
              })}
          </table>
      </div>
  )
};

export default EmployeeTable;
