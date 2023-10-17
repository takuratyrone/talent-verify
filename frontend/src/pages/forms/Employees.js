import { useState } from 'react';
import './forms.css';

const Employees = () => {

    const [employees, setEmployees] = useState([]);
    const [employeeName, setEmployeeName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleAddEmployee = (e) => {

        e.preventDefault();

        if (employeeName.trim() !== '' && employeeId.trim() !== '' && department.trim() !== '' &&
            role.trim() !== '' && startDate.trim() !== '' && endDate.trim() !== ''
        ) {
            const newEmployee = {
                id: Date.now(),
                employee_name: employeeName,
                employee_ID: employeeId,
                department: department,
                role_id: role,
                date_stated: startDate,
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
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{ employee.employeeName }</td>
                            <td>{ employee.employeeId }</td>
                            <td>{ employee.department }</td>
                            <td>{ employee.role }</td>
                            <td>{ employee.startDate }</td>
                            <td>{ employee.endDate }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary">Submit</button>

            <form action="">
                <input type="text" placeholder='Search' />
                <button className="btn btn-primary">Search</button>
                {/* <input type="button" value="Search" className='btn btn-primary' /> */}
            </form>
        </div>
    );
}
 
export default Employees;