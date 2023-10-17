import { useState } from 'react';
import './forms.css';

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

    const handleAddCompany = (e) => {

        e.preventDefault();

        if (companyName.trim() !== '' && regDate.trim() !== '' && companyRegNum.trim() !== '' &&
            address.trim() !== '' && contactPerson.trim() !== '' && numOfEmployees.trim() !== ''
            && contactPhone.trim() !== '' && email.trim() !== ''
        ) {
            const newCompany = {
                id: Date.now(),
                company_name: companyName,
                date_of_registration: regDate,
                company_reg_number: companyRegNum,
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

    return (
        <div className="company-container">
            <h1>Company</h1>
            <form>
                <input 
                    type="text" 
                    placeholder='Company Name' 
                    value={companyName} 
                    onChange={(e) => setCompanyName(e.target.value)}
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
                    {companies.map((company) => (
                        <tr key={company.id}>
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
            <button className="btn btn-primary">Submit</button>

            <form action="">
                <input type="text" placeholder='Search' />
                <button className="btn btn-primary">Search</button>
                {/* <input type="button" value="Search" className='btn btn-primary' /> */}
            </form>
        </div>
    );
}
 
export default Company;