import logo from './logo.svg';
import './App.css';
import Navigation  from './Componets/Navigation.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Componets/Home'
import { Routes } from 'react-router-dom';
import About from './Componets/About';
// import Employer from './Componets/Employer'
function App() {
  return (
    <div className='App'>     
          <Navigation mh-100 style={{margin:"100px"}}/>  
          <BrowserRouter>
              <Routes >    
                 <Route path='/' element={<Home/>}/>  
                 <Route path='/home' element={<Home/>}/>  

                 <Route path='/about' element={<About/>}/>  
                 {/* <Route path='/employer' element={<Employer/>}/>   */}


                        
              </Routes>     
          
          
          </BrowserRouter>
          

    </div>
  );
}

export default App;
