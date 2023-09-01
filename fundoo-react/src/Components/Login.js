import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import './Login.css';

const Login = () => {
    return (
        <div className="class">

            <div className="class1">
                <div className="t"><h1 className="H"><span className="F">F</span><span className="U">U</span><span className="N">N</span><span className="D">D</span><span className="OO">O</span><span className="oo">O</span></h1></div>

                <div >
                    <h1 className="cn">sign in</h1>
                    <p className="cn1">with your Fundoo Account</p>
                </div>

                <div className="E">
                    <TextField id="email" label="Email" variant="outlined" />
                </div>
            
                <div className="sn">
                    <TextField id="pass" label="Password" type="password" variant="outlined" />
        
                </div>
                <a href="" className="sn1" > Forget password?</a>
                
                <div className="cr">
                  <a href="signup.js" className="cr2">create account</a>
                    <Button className="cr1" variant="Contained" type="Submit">Login</Button>

                </div>
                
            </div>
        </div>

    )
}
export default Login