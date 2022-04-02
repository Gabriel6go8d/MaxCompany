import './App.css';
import './style.css'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Residencial from './Components/Residencial';
import Commercial from './Components/Commercial';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/residencial' element={<Residencial/>}/>
          <Route path='/commercial' element={<Commercial/>}/>
          <Route path='/contactus' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
