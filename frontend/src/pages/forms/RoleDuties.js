import { useState } from 'react';
import './forms.css';
import axios from 'axios';

const RoleDuties = () => {

    const [roleDuties, setRoleDuties] = useState([]);
    const [roleName, setRoleName] = useState('');
    const [duty, setDuty] = useState('');

    const csrfToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
    );

    const handleAddRoleDuties = (e) => {

        e.preventDefault();

        if (duty.trim() !== '' && roleName.trim() !== '') {
            const newRoleDuty = {
                role: roleName,
                duty: duty,
            }
            setRoleDuties([...roleDuties, newRoleDuty]);
            setDuty('');
            setRoleName('');
        }
    }

    const handleSubmit = () => {
        axios.post('api/roles/', roleDuties, {
            headers: {
                'X-CSRFToken': csrfToken,
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="role-duties-container">
            <h1>Role Duties</h1>
            <form>
                <input 
                    type="text" 
                    placeholder='Role' 
                    value={roleName} 
                    onChange={(e) => setRoleName(e.target.value)}
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
                    {roleDuties.map((roleDuty, index) => (
                        <tr key={index}>
                            <td>{ roleDuty.role }</td>
                            <td>{ roleDuty.duty }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <form action="">
                <input type="text" placeholder='Search' />
                <button className="btn btn-primary">Search</button>
                {/* <input type="button" value="Search" className='btn btn-primary' /> */}
            </form>
        </div>
    );
}
 
export default RoleDuties;