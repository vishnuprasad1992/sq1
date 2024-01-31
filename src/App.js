import './App.css';
import Home from './pages';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
