import React from 'react';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, NavbarBrand} from 'reactstrap';


   function App(){ 
     return( 
       <div className='App'> 
      <Navbar dark color="primary">
      <div Div className = "container">
      <NavbarBrand href="/">YOOO!</NavbarBrand>
       </div>
       </Navbar>
      
       </div> ); 
       } 
       
       export default App;