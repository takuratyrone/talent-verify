import { useState } from 'react';
import './forms.css';
import axios from 'axios';

const Roles = () => {

    const [roles, setRoles] = useState([]);
    const [duty, setDuty] = useState('');
    const [role, setRole] = useState('');

    const [searchRole, setSearchRole] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleAddRole = (e) => {

        e.preventDefault();

        if (duty.trim() !== '' && role.trim() !== '') {
            const newRole = {
                role: role,
                duty: duty,
            }
            setRoles([...roles, newRole]);
            setDuty('');
            setRole('');
        }
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8000/api/roles/', roles)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        setRoles([]);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.get('http://localhost:8000/api/role_search/', {
            params: {search_query: searchRole},
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
        <div className="roles-container">
            <h1>Roles</h1>
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
                <input type="button" value="Add Role" className='btn' onClick={handleAddRole} />                   
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>Role</th>
                        <th>Duty</th>
                    </tr>
                    {roles.map((role, index) => (
                        <tr key={index}>
                            <td>{ role.role }</td>
                            <td>{ role.duty }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder='Search Role' 
                    value={searchRole}
                    onChange={(e) =>  setSearchRole(e.target.value)}
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
                                <th>Role</th>
                                <th>Duty</th>
                            </tr>
                            { searchResult.map((roleData, index) => (
                                <tr key={index}>
                                    <td>{ roleData.role }</td>
                                    <td>{ roleData.duty }</td>
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
 
export default Roles;