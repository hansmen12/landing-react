import logo from './logo.svg';
import './App.css';
import Navigation  from './Componets/Navigation.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Componets/Home'
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>     
          <Navigation mh-100 style={{margin:"100px"}}/>  
          <BrowserRouter>
              <Routes >            
                 <Route path='/home' element={<Home/>}/>  
                        
              </Routes>     
          
          
          </BrowserRouter>
          

    </div>
  );
}

export default App;
