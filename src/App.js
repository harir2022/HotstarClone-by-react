import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Login from './components/Login';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Details/:id' element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  ); 
}

export default App;
