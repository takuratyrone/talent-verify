import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forms from './pages/forms/Forms';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/forms' element={ <Forms /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
