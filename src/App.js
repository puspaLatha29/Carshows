import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./Carshows/Header.js"
import Footer from './Carshows/Footer.js'
// import Home from './Carshows/Home.js'
// import Carousel from './Carshows/Carousel.js';
// import Services from './Carshows/Services.js';
// import Servicess from './Carshows/Servicess.js';
// import Cars from './Carshows/Cars.js';
// import Blog from './Carshows/Blog.js'
// import Blog1 from './Carshows/Blog1.js'
import Routing from './Carshows/Routing';
import { createContext, useState } from 'react';
export const LoginStatus = createContext()

function App() {
  const [login,setLogin] =useState(false)
  return (
    <div className="App">
     
   <LoginStatus.Provider value={[login,setLogin]}>
 
   <Header/>    
       <Routing/>
       
      <Footer/>
   </LoginStatus.Provider>
      
    </div>
  );
}

export default App;
