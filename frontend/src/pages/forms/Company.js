import { useState } from 'react';
import './forms.css';
import axios from 'axios';

const Company = () => {

    const [companies, setCompanies] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [regDate, setRegDate] = useState('');
    const [companyRegNum, setCompanyRegNum] = useState('');
    const [address, setAddress] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [numOfEmployees, setNumOfEmployees] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [email, setEmail] = useState('');

    const [searchCompany, setSearchCompany] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleAddCompany = (e) => {

        e.preventDefault();

        if (companyName.trim() !== '' && regDate.trim() !== '' && companyRegNum.trim() !== '' &&
            address.trim() !== '' && contactPerson.trim() !== '' && numOfEmployees.trim() !== ''
            && contactPhone.trim() !== '' && email.trim() !== ''
        ) {
            const newCompany = {
                company_name: companyName,
                date_of_registration: regDate,
                company_registration_number: companyRegNum,
                address: address,
                contact_person: contactPerson,
                number_of_employees: numOfEmployees,
                contact_phone: contactPhone,
                email_address: email,
            };
            setCompanies([...companies, newCompany]);
            setCompanyName('');
            setRegDate('');
            setCompanyRegNum('');
            setAddress('');
            setContactPerson('');
            setNumOfEmployees('');
            setContactPhone('');
            setEmail('');
        }
    }

    const handleSubmit = () => {
        axios.post('http://localhost:8000/api/company/', companies)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        setCompanies([]);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.get('http://localhost:8000/api/company_search/', {
            params: {search_query: searchCompany},
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
        <div className="company-container">
            <h1>Company</h1>
            <form>
                <input 
                    type="text" 
                    placeholder='Company Name' 
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />
                <input 
                    type="text" 
                    placeholder='Registration Date' 
                    value={regDate} 
                    onChange={(e) => setRegDate(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Company Registration Number' 
                    value={companyRegNum} 
                    onChange={(e) => setCompanyRegNum(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Address' 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                /> 
                <input 
                    type="text" 
                    placeholder='Contact Person' 
                    value={contactPerson} 
                    onChange={(e) => setContactPerson(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Number of Employees' 
                    value={numOfEmployees} 
                    onChange={(e) => setNumOfEmployees(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Contact Phone' 
                    value={contactPhone} 
                    onChange={(e) => setContactPhone(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                /> 
                <input type="button" value="Add Company" className='btn' onClick={handleAddCompany} />                   
            </form>

            <table>
                <tbody>
                    <tr>
                        <th>Company Name</th>
                        <th>Reg Date</th>
                        <th>Reg Number</th>
                        <th>Address</th>
                        <th>Contact Person</th>
                        <th>Employees</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                    {companies.map((company, index) => (
                        <tr key={index}>
                            <td>{ company.company_name }</td>
                            <td>{ company.date_of_registration }</td>
                            <td>{ company.company_reg_number }</td>
                            <td>{ company.address }</td>
                            <td>{ company.contact_person }</td>
                            <td>{ company.number_of_employees }</td>
                            <td>{ company.contact_phone }</td>
                            <td>{ company.email_address }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <form action="">
                <input 
                    type="text" 
                    placeholder='Search Company Name/ID' 
                    value={searchCompany}
                    onChange={(e) => setSearchCompany(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                {/* <input type="button" value="Search" className='btn btn-primary' /> */}
            </form>

            { loading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            
            {
                ( searchResult &&
                    <table>
                        <tbody>
                            <tr>
                                <th>Company Name</th>
                                <th>Reg Date</th>
                                <th>Reg Number</th>
                                <th>Address</th>
                                <th>Contact Person</th>
                                <th>Employees</th>
                                <th>Phone</th>
                                <th>Email</th> 
                            </tr>
                            { searchResult.map((companyData, index) => (
                                <tr key={index}>
                                    <td>{ companyData.company_name }</td>
                                    <td>{ companyData.date_of_registration }</td>
                                    <td>{ companyData.company_registration_number }</td>
                                    <td>{ companyData.address }</td>
                                    <td>{ companyData.contact_person }</td>
                                    <td>{ companyData.number_of_employees }</td>
                                    <td>{ companyData.contact_phone }</td>
                                    <td>{ companyData.email_address }</td>
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
 
export default Company;