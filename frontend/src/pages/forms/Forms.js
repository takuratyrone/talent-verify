import './forms.css';

const Forms = () => {
    return (
        <div className="container forms-container">
            <div className="form-company">
                <h1>Forms</h1>
                <form action="#">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" /> 
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" /> 
                    <input type="button" value="Submit" className='btn' />                   
                </form>

                <h1>Forms</h1>
                <form action="#">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" /> 
                    <input type="text" />
                    <input type="text" />
                    <input type="button" value="Submit" className='btn' />                   
                </form>
            </div>
        </div>
    );
}
 
export default Forms;