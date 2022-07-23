import Header from './components/header/header'
import Footer from './components/footer/footer'
import Register from './components/register/register'
import LogIn  from './components/login/login';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='Register' element={<Register/>}/>
        <Route path='Login' element={<LogIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
