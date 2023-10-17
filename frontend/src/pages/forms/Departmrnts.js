import { useState } from 'react';
import './forms.css';

const Departments = () => {

    const [departments, setDepartments] = useState([]);
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');

    const handleAddDepartment = (e) => {

        e.preventDefault();

        if (company.trim() !== '' && department.trim() !== '') {
            const newDepartment = {
                id: Date.now(),
                company_id: company,
                department: department,
            }
            setDepartments([...departments, newDepartment]);
            setCompany('');
            setDepartment('');
            
        }
    }

    return (
        <div className="departments-container">
            <h1>Departments</h1>
            <form>
                <input 
                    type="text" 
                    placeholder='Company' 
                    value={company} 
                    onChange={(e) => setCompany(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Department' 
                    value={department} 
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <input type="button" value="Add Department" className='btn' onClick={handleAddDepartment} />                   
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Department</th>
                    </tr>
                    {departments.map((department) => (
                        <tr key={department.id}>
                            <td>{ department.company }</td>
                            <td>{ department.department }</td>
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
 
export default Departments;