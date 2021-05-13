import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main'
import RoomDetails from './Routes/RoomDetails'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path='/' component={Main} />
        <Route path='/RoomDetails' component={RoomDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
