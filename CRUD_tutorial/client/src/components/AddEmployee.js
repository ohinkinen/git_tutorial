import React, { useState } from 'react';
import EmployeeService from '../services/employee.service';

const AddEmployee = () => {
    const initialEmployeeState = {
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        salary: ''
    };
    
    const [employee, setEmployee] = useState(initialEmployeeState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEmployee({...employee, [name]: value });
    };

    const saveEmployee = () => {
        var data = {
            first_name: employee.first_name,
            last_name: employee.last_name,
            email: employee.email,
            phone: employee.phone,
            salary: employee.salary
        };
        EmployeeService.create(data)
            .then(response => {
                setEmployee({
                    id: response.data.id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    phone: response.data.phone,
                    salary: response.data.salary
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch (e => {
                console.log(e);
            });
    };

    const newEmployee = () => {
        setEmployee(initialEmployeeState);
        setSubmitted(false);
    };
    
    return (
        <div className='submit-form'>
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className='btn btn-success' onClick={newEmployee}>
                        Add Employee
                    </button>
                </div>
            ) : (
                <div> 
                    <div className='form-group'>
                        <label htmlFor='first_name'>First Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='first_name'
                            required
                            value={employee.first_name}
                            onChange={handleInputChange}
                            name='first_name'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='last_name'>Last Name</label>
                        <input
                            type='text'
                            className='form-control'
                            id='last_name'
                            required
                            value={employee.last_name}
                            onChange={handleInputChange}
                            name='last_name'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text'
                            className='form-control'
                            id='email'
                            required
                            value={employee.email}
                            onChange={handleInputChange}
                            name='email'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input
                            type='text'
                            className='form-control'
                            id='phone'
                            required
                            value={employee.phone}
                            onChange={handleInputChange}
                            name='phone'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='salary'>Salary</label>
                        <input
                            type='text'
                            className='form-control'
                            id='salary'
                            required
                            value={employee.salary}
                            onChange={handleInputChange}
                            name='salary'
                        />
                    </div>
                    <button onClick={saveEmployee} className='btn btn-success'>
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddEmployee;