import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const ContactForm = () => {
  return (
    
    <div className="text align center contactcontainer">
              
    <MDBContainer className="contact">
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h2 text-center mb-4">Write to us</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>

        
        <div className="contact2">
        <hr className="hline"></hr>
        <p className="h2 text-center mb-4">Contact</p><br></br>
       <p  className="pcontact text-center contactdetails">04 123456
        <br>
      </br>
        helpdesk@abclogistics.com
        </p>
      </div>

      </MDBRow>
      <div className="contact1">
        <p className="h2 text-center mb-4">Contact</p><br></br>
       <p  className="pcontact text-center contactdetails">04 123456
        <br>
      </br>
        helpdesk@abclogistics.com
        </p>
      </div>
    
    </MDBContainer>
    
    
    
    </div>
     
  
  );
};

export default ContactForm;