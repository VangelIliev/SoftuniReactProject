import Header from './components/header/header'
import Footer from './components/footer/footer'
import Register from './components/register/register'
import LogIn  from './components/login/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <LogIn/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
