
import { BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import ViewBeat from './beat/ViewBeat';
import CreateBeat from './beat/CreateBeat';
import ListUsers from './user/ListUsers';
import UpdateBeat from './beat/UpdateBeat';
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Register' element={<RegisterUser/>}/>
          <Route exact path='/ViewBeat' element={<ViewBeat/>}/>
          <Route exact path='/CreateBeat' element={<CreateBeat/>}/>
          <Route exact path='/ListUsers' element={<ListUsers/>}/>
          <Route exact path='/UpdateBeat/:id' element={<UpdateBeat/>}/>
        </Routes>
      </Router>          
    </div>
  );
}

export default App;
