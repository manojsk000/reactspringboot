import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../styles/login.css"
import ToasterUi from 'toaster-ui';



const Login = () => {

    let userName = useRef("")
    let password = useRef("")
    const toaster = new ToasterUi();
    let nav = useNavigate();
    

    let func = (e) => {
        e.preventDefault();
        console.log(typeof(userName.current.value));
        console.log(password.current.value);

        var myHeaders = new Headers();
        myHeaders.append("data", userName.current.value);
        myHeaders.append("cpassword", password.current.value);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // redirect: 'follow'
        };

        fetch("http://localhost:8892/CustomerLogin", requestOptions)
            .then(response => {
                console.log(response.ok);
                if(response.status==404)
                {
                    throw Error("user not found")
                }
                return response.json() })
            .then((result) =>{
                 console.log(result)
                 toaster.addToast( "login succesfful" , "success" , {duration : 3000 , allowHtml :true});
                 nav("/")

                })
            .catch((error) => {
                toaster.addToast(error , "error");
            });
        }

    return ( 
        <div className="login">
            <div className="block">
                <div className="head">
                    <h3>Login form</h3>
                </div>
                <div className="innerblock">
                    <form action="" onSubmit={func}>
                        <input id="username" type="text" placeholder="username/email" required ref={userName} /><br /><br />
                        <input id="password" type="password" placeholder="password" required ref={password} /><br /><br />
                        <button>Login</button>
                    </form>
                </div><br /><br />
                <span>Don't have an account<Link to="/">Sign up</Link></span>
                <br /><br />
                <Link to="/forget">forgot password?</Link>
            </div>
        </div>
     );
}
 
export default Login;