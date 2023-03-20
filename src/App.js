import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Create from './components/Create'
import Read from './components/Read';

import Update from './components/Update';





function App() {
   
 

  return (

    <div className="App">
    <h2 className='mb-3'>CRUD Operation</h2>
   
      <Routes>
    
<Route path='/' element={<Create/>}/>
<Route path='/read' element={<Read/>}/>

   <Route path='/update' element={<Update/>}/>
   </Routes>
    </div>
 
  );
}

export default App;
