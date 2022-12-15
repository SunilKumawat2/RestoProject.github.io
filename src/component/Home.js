import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Sign_img from './Sign_img';
import { Link } from 'react-router-dom';

const Home = () => {
    const [inpval,setInpval] =useState({
        name:"",
        email:"",
        date:"",
        password:""
    })
    const [data,setData] =useState([]);
    // console.log(inpval)
    const getData = (e)=>{
    // console.log(e.target.value);

    const {value,name}=e.target;

    setInpval(()=>{
        return{
            
            ...inpval,
            [name]:e.target.value
           
            
           
        }
    })
    }
    const addData = (e) =>{
        e.preventDefault();
        console.log(inpval)
        const {name,email,date,password} = inpval;
        if(name===""){
            alert("name is required for form validation:");
        }
        else if(email===""){
            alert("Email is rerqured for validation")
        }
        else if(!email.includes("@")){
            alert("Plz enter Vaild email address")
        }
        else if(date===""){
            alert("Date will be Requred")
        }
        else if(password===""){
            alert("password is required");
        }
        else if(password.length<5){
            alert("passowrd grater then 5")
        }
        else{
            console.log("data Successfully")

            localStorage.setItem("userYouTube",JSON.stringify([...data,inpval]));
        }
    }
  return (
    <div>
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3" style={{width:"100%"}}>
                    <h2 className='text-center col-lg-6'>Sign Up</h2>
                    <Form>
      <Form.Group className="mb-3 col-lg-6">
        <Form.Control type="text" name='name' onChange={getData}  placeholder="Enter your name" />
        
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" >
        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter Your Email" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="date" name='date' onChange={getData} placeholder="Enter your DOB" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" name='password' onChange={getData} placeholder="Enter your Password" />
      </Form.Group> <br />
     
      <Button variant="primary text-center col-lg-6" onClick={addData}
       style={{background:"green"}} type="submit">
        Submit
      </Button>
    </Form> <br />
    <p>Already Have an Account <span> <Link to="/login">SignIn</Link> </span> </p>
                </div>
            
        <Sign_img/>
       
            </section>
        </div>
    </div>
    
  )
}

export default Home