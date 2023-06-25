import "../styles/signup.css"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ToasterUi from 'toaster-ui';


const Signup = () => {

    const toaster = new ToasterUi();
   let navigate = useNavigate()

   let userName =  useRef();
   let email =  useRef();
   let number =  useRef();
   let age =  useRef();
   let password =  useRef();
   let height =  useRef();
   let weight =  useRef();
   let[gender, updateGender] = useState("")
   let bloodgroup =  useRef();

    let func = (e) => 
    {
        e.preventDefault();
        console.log(userName.current.value);
        console.log(email.current.value);
        console.log(number.current.value);
        console.log(age.current.value);
        console.log(password.current.value);
        console.log(height.current.value);
        console.log(weight.current.value);
        console.log(gender);
        console.log(bloodgroup.current.value);
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "cname": userName.current.value ,
        "cphno": number.current.value,
        "cemail": email.current.value,
        "cgender": gender,
        "cage": age.current.value,
        "cbloodGroup": bloodgroup.current.value,
        "cheight": height.current.value,
        "cweight": weight.current.value,
        "cpassword": password.current.value
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8892/CustomerSignUp", requestOptions)
        .then(response => {
            console.log(response);
            console.log(response.status);

            return response.json()})
        .then(result =>{
            toaster.addToast("Signup successfully completed");
             navigate("/login")
            })
        .catch(error => console.log('error', error));
     }

    return ( 
        <div className="signup">
                <div class="border">
        <div class="centerpage1">
            <div class="title">
                <h2>Customer Registration form</h2>
            </div>
        </div>
        <form action=""  onSubmit={func}>
        <div class="flex">
            <div class="leftpage">
                <div class="user-box">
                    <input type="text" required ref={userName}/>
                    <label>Customer Name</label>
                  </div>
                  <div class="user-box">
                    <input type="email" required ref={email} />
                    <label>Customer Email</label>
                  </div>
                  <div class="user-box">
                    <input type="tel" minlength="10" maxlength="10" required ref={number} />
                    <label>Customer Number</label>
                  </div>
                  <div class="user-box">
                    <input type="number" required ref={age} />
                    <label>Customer Age</label>
                  </div>
                  <div class="user-box">
                    <input type="password" required ref={password} />
                    <label>Customer password</label>
                  </div>
            </div>   
                    
            <div class="rightpage">
                
                <div class="user-box1">
                    <input type="number" ref={height} />
                    <label>Customer Height in Centimeter</label>
                </div>
                <div class="user-box1">
                    <input type="number" ref={weight} />
                    <label>Customer Weight in Kilograms</label>
                </div>
                <div class="genderbox">
                    <label for="Gender">Customer Gender :</label>
                    <input type="radio" name="gender" onClick={()=>{updateGender("male")}}  />
                    <label for="Male">Male</label>
                    <input type="radio"  name="gender" onClick={()=>{updateGender("female")}}  />
                    <label for="Female">Female</label>
                    
                </div>
                <div class="bloodgroup">
                    <label for="Blood">Customer Blood Group :</label>
                    <select name="Blood" id="Blood" ref={bloodgroup}>
                        <option value="" selected disabled>Blood Group</option>
                        <option value="A +ve">A<sup>+</sup></option>
                        <option value="A -ve">A<sup>-</sup></option>
                        <option value="B +ve">B<sup>+</sup></option>
                        <option value="B -ve">B<sup>-</sup></option>
                        <option value="O +ve">O<sup>+</sup></option>
                        <option value="O -ve">O<sup>-</sup></option>
                        <option value="AB +ve">AB<sup>+</sup></option>
                        <option value="AB -ve">AB<sup>-</sup></option>
                    </select>
                </div>
            </div>
        </div>
        <button>Signup</button>
        </form>
        <div className="login">
            <span>Already have an account <Link to="/login">login</Link></span>
        </div>
    </div>
        </div>
     );
}
 
export default Signup;