import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import AddUser from './Components/AddUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adduser' element={<AddUser/>} />
      </Routes>
    </div>
  );
}

export default App;
