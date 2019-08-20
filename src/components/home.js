import React from 'react';//createContext SignUp
import {Switch,Route} from 'react-router-dom';
import Navbar from './Navbar';

import {InfoSection, Info} from './Info';

import Video from './Video';
import Testimony from './Testimony';
import Jumbotron from './Jumbotron';
import Map from './map';
import ContactForm from './contactForm';
import Footer from './footer';







const Home= () => {

 
 

  return (
    
    <div className="App">
     <Navbar></Navbar>
     <Jumbotron img="images/logistics.jpg"/>
     
    
     <InfoSection >
       <Info
       title= "Who We Are"
       caption="Sample Content --- Freight ForwardingFreight ForwardingFreight ForwardingFreight ForwardingFreight ForwardingFreight Forwarding
       Packing and RemovalsPacking Packing and RemovalsPacking Packing and RemovalsPacking Warehousing WarehousingWarehousing WarehousingWarehousingWarehousing WarehousingWarehousingWarehousingWarehousing WarehousingWarehousingWarehousing Warehousing 
       nd RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing W
       Packing and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing W
       Packing and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing W
       Packing and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing W
       Packing and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing WPacking and RemovalsPacking Packing and RemovalsPacking Warehousing W">
                                                                   
       </Info>
      
       
     
     </InfoSection>
     <ContactForm/>
    
     <Map/>
    <Footer/>

   
    
     
 </div>
 
  );
}

export default Home;
