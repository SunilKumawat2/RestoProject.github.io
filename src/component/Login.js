import{ React,useState} from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Sign_img from './Sign_img';
import { Link, useNavigate } from 'react-router-dom';
import {Table} from 'react-bootstrap';

const Login = () => {
    const history = useNavigate();

    const [inpval,setInpval] =useState({
        email:"",
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
        // console.log(inpval)
        const {email,password} = inpval;

        const getUserArr = localStorage.getItem("userYouTube")
        console.log(getUserArr);
       


        
         if(email===""){
            alert("Email is rerqured for validation")
        }
        else if(!email.includes("@")){
            alert("Plz enter Vaild email address")
        }
       
        else if(password===""){
            alert("password is required");
        }
        else if(password.length<5){
            alert("passowrd grater then 5")
        }
        else{
            // console.log("data Successfully")

            // localStorage.setItem("userYouTube",JSON.stringify([...data,inpval]));

            if(getUserArr && getUserArr.length){
                const userdata = JSON.parse(getUserArr);
                // console.log(userdata)

                const userlogin = userdata.filter((el,k)=>{
                    return el.email === email && el.password === password
                });
                // console.log(userlogin);
                if(userlogin.length===0){
                    alert("invaild deatils")
                }
                else{
                    console.log("user login successfully");
                    history('/details')
                }
            }
        }
    }
  return (
    <div>
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3" style={{width:"100%"}}>
                    <h2 className='text-center col-lg-6'>Sign In</h2>
                    <Form>
     

      <Form.Group className="mb-3 col-lg-6" >
        <Form.Control type="email" onChange={getData} name='email' placeholder="Enter Your Email" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Control type="password" onChange={getData} name='password'  placeholder="Enter your Password" />
      </Form.Group> <br />
     
      <Button variant="primary text-center col-lg-6" onClick={addData}
       style={{background:"green"}} type="submit">
        Submit
      </Button>
    </Form> <br />
    <p>Already Have an Account <span> <Link to="/">Sign Up</Link> </span> </p>
                </div>
            
        <Sign_img/>
            </section>
        </div>
    </div>
  )
}

export default Login