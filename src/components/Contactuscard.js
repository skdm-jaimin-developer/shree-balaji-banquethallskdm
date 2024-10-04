import React from "react";
import Contactimg from "./Imagess/Contact.jpeg";
import './Contactuscard.css';
const Contactuscard = (props) => {
  return (
    <>
      <div
        className=" container justify-content-center my-5"
        style={{ backgroundColor: "black" ,position:'relative',height:'500 px' }}
      >
        <img src={Contactimg} className="img-fluid " alt="img" style={{opacity:'.5',width:'100%' ,height:'500px'}}/>
        
        <form className="   p-5 formcontact">
        <h1 style={{
          color:'white'
          ,fontFamily:'var(--head-font)'
        }} className="text-center display-6 ">{props.title}</h1>
          <div className="form-floating mb-3 mt-5 " >
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control "
              id="floatingName"
              placeholder="Name"
            />
            <label htmlFor="floatingPassword">Name</label>
          </div>
          <div className="form-floating mb-3" >
          <textarea className="form-control" style={{resize:'none'}} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button className="btn btn-danger px-3" style={
            {display:'flex',margin:'auto',backgroundColor:'#453F78'}}>
              Submit  </button>
        </form>
      </div>
    </>
  );
};

export default Contactuscard;
