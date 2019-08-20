import React from 'react';



const Jumbotron = (prop) => {

      return (
      <div id="mainpage" className="Jumbotron-down jumbotron"
      style={{backgroundImage: `url('${prop.img}')` }}>
        <div className="container">
            <div className="row">
                <div className="col-xl-7 mx-auto jtext">
                


                  

              


                  
          </div>
          </div>
        </div>
        </div>
      
    )
  }



export default Jumbotron;