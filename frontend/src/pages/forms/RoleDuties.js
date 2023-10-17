import { useState } from 'react';
import './forms.css';

const RoleDuties = () => {

    const [roleDuties, setRoleDuties] = useState([]);
    const [role, setRole] = useState('');
    const [duty, setDuty] = useState('');

    const handleAddRoleDuties = (e) => {

        e.preventDefault();

        if (duty.trim() !== '' && role.trim() !== '') {
            const newRoleDuty = {
                id: Date.now,
                role_id: role,
                duty: duty,
            }
            setRoleDuties([...roleDuties, newRoleDuty]);
            setDuty('');
            setRole('');
        }
    }

    return (
        <div className="role-duties-container">
            <h1>Role Duties</h1>
            <form>
                <input 
                    type="text" 
                    placeholder='Role' 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Duty' 
                    value={duty} 
                    onChange={(e) => setDuty(e.target.value)}
                />
                <input type="button" value="Add Duty" className='btn' onClick={handleAddRoleDuties}/>                   
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>Role</th>
                        <th>Duty</th>
                    </tr>
                    {roleDuties.map((roleDuty) => (
                        <tr key={roleDuty.id}>
                            <td>{ roleDuty.role_id }</td>
                            <td>{ roleDuty.duty }</td>
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
 
export default RoleDuties;