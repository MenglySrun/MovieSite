import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import List from './Components/List';
import Detail from './Components/Detail';
import Aboutus from './Components/Aboutus';
import Signup from './Components/Signup'
import Login from './Components/Login';
import { AuthProvider } from './Components/Auth';
import Home from './Components/Home';
import Buttom from './Components/Buttom';

function App({ movie }) {

  return (
    // <div>
    //    <BrowserRouter>
    //     <Routes>
    //     {/* <AuthProvider> */}
    //       <Route path='/home' element={<Home />} />
    //       <Route path='/' element={<Login />} />
    //       <Route path='/signup' element={<Signup />} />
    //       {/* </AuthProvider> */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div>
      <div className='mt-10'>
        {
          <BrowserRouter>
          <Routes>
           <Route path={'/login'} element={<Login/>}/> 
           <Route path={'/signup'} element={<Signup/>}/> 
            <Route path={'/'} element={<List movie = {movie}/>}/>
            <Route path={'/watch/:id'} element={<Detail/>}/>
            <Route path={'/aboutus'} element={<Aboutus/>}/>
          </Routes>
          </BrowserRouter>
         
        }
      </div> 
    </div>
  );
}

export default App;
