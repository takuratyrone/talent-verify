import { useState } from 'react';
import './forms.css';
import axios from 'axios';

const Departments = () => {

    const [departments, setDepartments] = useState([]);
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');

    const [searchDepartment, setSearchDepartment] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleAddDepartment = (e) => {

        e.preventDefault();

        if (company.trim() !== '' && department.trim() !== '') {
            const newDepartment = {
                company_name: company,
                department: department,
            }
            setDepartments([...departments, newDepartment]);
            setCompany('');
            setDepartment('');
            
        }
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8000/api/departments/', departments)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        setDepartments([]);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.get('http://localhost:8000/api/department_search/', {
            params: {search_query: searchDepartment},
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
                    {departments.map((department, index) => (
                        <tr key={index}>
                            <td>{ department.company_name }</td>
                            <td>{ department.department }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder='Search Department' 
                    value={searchDepartment}
                    onChange={(e) => setSearchDepartment(e.target.value)}
                />
                <button className="btn btn-primary">Search</button>
                {/* <input type="button" value="Search" className='btn btn-primary' /> */}
            </form>

            { loading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            
            {
                ( searchResult &&
                    <table>
                        <tbody>
                            <tr>
                                <th>Company</th>
                                <th>Department</th>
                            </tr>
                            { searchResult.map((departmentData, index) => (
                                <tr key={index}>
                                    <td>{ departmentData.company_id_id }</td>
                                    <td>{ departmentData.department }</td>
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
 
export default Departments;