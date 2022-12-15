
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './component/Login';
// import Home from './component/Home';
import Deatils from './component/Deatils';

function App() {
  return (
    <div className="App">
          <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/details' element={<Deatils/>}/>

       

      </Routes>
      
      
    </div>
  );
}

export default App;
