import './forms.css';
import Company from "./Company";
import Employees from './Employees';
import Departments from './Departmrnts';
import RoleDuties from './RoleDuties';
import Roles from './Roles';
// import Navbar from '../../components/Navbar';
import '../../components/navbar.css';
import { useState } from 'react';

const Forms = () => {

    const [activeNav, setActiveNav] = useState('#company');  

    return (
        <div className="forms">
            <nav>
                <div className="links">
                    <ul id='navbar'>
                        <li className={activeNav === '#company' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#company')}>Company</li>
                        <li className={activeNav === '#employees' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#employees')}>Employees</li>
                        <li className={activeNav === '#departments' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#departments')}>Departments</li>
                        <li className={activeNav === '#roles' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#roles')}>Roles</li>
                        <li className={activeNav === '#duties' ? 'navbar-links active' : 'navbar-links'} onClick={() => setActiveNav('#duties')}>Role Duties</li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="forms-container">
                    <div className={activeNav === '#company' ? 'forms-content': 'forms-content active'} style={{display: activeNav === '#company' ? 'block' : 'none'}}>
                        <Company />
                    </div>
                    <div className={activeNav === '#employees' ? 'forms-content': 'forms-content active'} style={{display: activeNav === '#employees' ? 'block' : 'none'}}>
                        <Employees />
                    </div>
                    <div className={activeNav === '#departments' ? 'forms-content': 'forms-content active'} style={{display: activeNav === '#departments' ? 'block' : 'none'}}>
                        <Departments />
                    </div>
                    <div className={activeNav === '#roles' ? 'forms-content': 'forms-content active'} style={{display: activeNav === '#roles' ? 'block' : 'none'}}>
                        <Roles />
                    </div>
                    <div className={activeNav === '#duties' ? 'forms-content': 'forms-content active'} style={{display: activeNav === '#duties' ? 'block' : 'none'}}>
                        <RoleDuties />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Forms;