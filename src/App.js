import './App.css';
import Home from './pages';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Reports from './pages/Reports';

function App() {
  return (
    <div className="App">
      {/* routes for different pages */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/reports' element={<Reports />}></Route>
        <Route path='/analytics' element={<Analytics />}></Route>
      </Routes>
    </div>
  );
}

export default App;
