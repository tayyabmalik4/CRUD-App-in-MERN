import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CodeWithTayyab from './Components/CodeWithTayyab/CodeWithTayyab';
import AddUser from './Components/AddUser/AddUser';
import AllUser from './Components/AllUser/AllUser';
import Error from './Components/PageNotFound/PageErrorMain';
import EditUser from './Components/EditUser/EditUser';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route exact path='/home' element = {<CodeWithTayyab/>} /> 
      <Route exact path="/" element={<Navigate replace to="/alluser" />} />
      <Route exact path='/adduser' element={<AddUser/>} />
      <Route exact path='/alluser' element={ <AllUser/>} />
      <Route exact path='/edituser/:id' element={ <EditUser/>} />

      <Route path="*" element={<Error />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
