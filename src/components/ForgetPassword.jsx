import "../styles/fp.css"
import { Link } from "react-router-dom";
const ForgetPassword = () => {
    return ( 
        <div className="forgetpassword">
            <div className="block">
                <div className="head">
                    <h3>Forget Password</h3>
                </div>
                <div className="innerblock">
                    <form action="/login">
                        <input id="username" type="text" placeholder="username/password" required /><br /><br />
                        <input id="password" type="password" placeholder="password" required /><br /><br />
                        <button>Change Password</button>
                    </form><br /><br />
                    <span>Click Here to <Link to="/login" >Login</Link></span>
                </div>
            </div>
        </div>
     );
}
 
export default ForgetPassword;