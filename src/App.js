import logo from './logo.svg';
import './App.css';
import Navigation  from './Componets/Navigation.jsx';
import { Route, HashRouter } from 'react-router-dom';
import Home from './Componets/Home'
import { Routes } from 'react-router-dom';
import About from './Componets/About';

import Employer from './Componets/Employer'
function App() {
  return (
    <div className='App'>     
          <HashRouter>
             <Navigation mh-100 style={{margin:"100px"}}/>  

              <Routes >    
                 <Route exact  path='/' element={<Home/>}/>  
                 <Route exact path='/home' element={<Home/>}/>  
                 <Route exact path='/about' element={<About/>}/>  
                 <Route path='/employer' element={<Employer/>}/>  
    
              </Routes>     
          
          
          </HashRouter>
          

    </div>
  );
}

export default App;
