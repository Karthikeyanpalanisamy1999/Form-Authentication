import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
