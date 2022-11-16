//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/About';
import Home from './components/Home/Home';
import Menu from './components/Menu';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Test from './components/Test';
function App() {
  return (
    <>
         <Router>
             <Menu/>        
                <Routes>
                  <Route path='/' element={<Home/>}> </Route> 
                  <Route path='/about' element={<About/>}> </Route>
                  <Route path='/contact' element={<Contact/>}> 
                      <Route path='/contact/test' element={<Test/>}></Route>
                  </Route>
                 </Routes>
              <Footer/>
          </Router>  
      </>
  );
}

export default App;
