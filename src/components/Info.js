import React from 'react';
import container from 'react-bootstrap';
import row from 'react-bootstrap';
import col from 'react-bootstrap';

export const Info = (prop) => {
    return(


      <div>
       
        <h3>{prop.title}</h3>
        <p>{prop.caption}</p>
      </div>
    )
  }
  
  export const InfoSection = (prop) => {
    return (
        
      <div className='InfoGroup container-fluid'>

        <div>
      
            {prop.children}
          </div>
        </div>
      
    )
  }
  
export default InfoSection;  