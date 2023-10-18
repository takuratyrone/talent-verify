import { useState } from 'react';
import './forms.css';
import axios from 'axios';

const Employees = () => {

    const [employees, setEmployees] = useState([]);
    const [employeeName, setEmployeeName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [searchEmployee, setSearchEmployee] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleAddEmployee = (e) => {

        e.preventDefault();

        if (employeeName.trim() !== '' && employeeId.trim() !== '' && department.trim() !== '' &&
            role.trim() !== '' && startDate.trim() !== '' 
        ) {
            const newEmployee = {
                employee_name: employeeName,
                employee_id: employeeId,
                department: department,
                role_duty: role,
                date_started: startDate,
                date_left: endDate,
            };
            setEmployees([...employees, newEmployee]);
            setEmployeeName('');
            setEmployeeId('');
            setDepartment('');
            setRole('');
            setStartDate('');
            setEndDate('');
        }
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8000/api/employees/', employees)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        setEmployees([]);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.get('http://localhost:8000/api/employee_search/', {
            params: {search_query: searchEmployee},
        })
            .then((res) => {
                console.log(res.data);
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })
    }

    return (
        <div className="employees-container">
            <h1>Employees</h1>
            <form>
                <input 
                    type="text" 
                    placeholder='Employee Name' 
                    value={employeeName} 
                    onChange={(e) => setEmployeeName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Employee ID' 
                    value={employeeId} 
                    onChange={(e) => setEmployeeId(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Department' 
                    value={department} 
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Role' 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                /> 
                <input 
                    type="text" 
                    placeholder='Date Started' 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='End Date' 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <input type="button" value="Add Employee" className='btn' onClick={handleAddEmployee} />                   
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>Eployee Name</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{ employee.employee_name }</td>
                            <td>{ employee.employee_id }</td>
                            <td>{ employee.department }</td>
                            <td>{ employee.role_duty }</td>
                            <td>{ employee.date_started }</td>
                            <td>{ employee.date_left }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder='Search' 
                    value={searchEmployee}
                    onChange={(e) => setSearchEmployee(e.target.value)}
                />
                <button className="btn btn-primary" type='submit'>Search</button>
                {/* <input type="button" value="Search" className='btn btn-primary' /> */}
            </form>

            { loading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            
            {
                ( searchResult &&
                    <table>
                        <tbody>
                            <tr>
                                <th>Eployee Name</th>
                                <th>Employee ID</th>
                                <th>Department</th>
                                <th>Role</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                            { searchResult.map((employeeData, index) => (
                                <tr key={index}>
                                    <td>{ employeeData.employee_name }</td>
                                    <td>{ employeeData.employee_id }</td>
                                    <td>{ employeeData.department }</td>
                                    <td>{ employeeData.role_duty }</td>
                                    <td>{ employeeData.date_started }</td>
                                    <td>{ employeeData.date_left }</td>
                                    <td>
                                        <button className="btn btn-primary">Update</button>
                                        <button className="btn btn-primary">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}
 
export default Employees;