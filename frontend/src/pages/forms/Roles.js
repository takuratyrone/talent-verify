import { useState } from 'react';
import './forms.css';

const Roles = () => {

    const [roles, setRoles] = useState([]);
    const [department, setDepartment] = useState('');
    const [role, setRole] = useState('');

    const handleAddRole = (e) => {

        e.preventDefault();

        if (department.trim() !== '' && role.trim() !== '') {
            const newRole = {
                id: Date.now(),
                department_id: department,
                role: role,
            }
            setRoles([...roles, newRole]);
            setDepartment('');
            setRole('');
        }
    }

    return (
        <div className="roles-container">
            <h1>Roles</h1>
            <form>
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
                <input type="button" value="Add Role" className='btn' onClick={handleAddRole} />                   
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>Department</th>
                        <th>Role</th>
                    </tr>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td>{ role.department }</td>
                            <td>{ role.role }</td>
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
 
export default Roles;