import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import './Login.css';
import { signin } from "../../Sevices/Userservices";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const [userLogin, setuserLogin] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate()

    const [errorObj, setErrorObj] = useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: ""
    })
    let name, value;

    const handleInput =  (y) => {
        name = y.target.name
        value = y.target.value
        setuserLogin({ ...userLogin, [name]: value })
    }
    const handleClick = async () => {
        let emailTest = emailRegex.test(userLogin.email);
        let passwordTest = passwordRegex.test(userLogin.password);
        if (emailTest == false) {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "enter correct email"
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: ""
            }));
        }
        if (passwordTest == false) {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: true,
                passwordHelper: "enter correct password"

            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: false,
                passwordHelper: ""
            }));
        }
        console.log(userLogin);
        if(emailTest === true && passwordTest === true)
        {
           let response  = await  signin(userLogin);
           console.log(response);
           localStorage.setItem("token", response.data.data);
           navigate("/dashboard")

        }
    }

    return (
        <div className="class">

            <div className="class1">
                <div className="t"><h1 className="H"><span className="F">F</span><span className="U">U</span><span className="N">N</span><span className="D">D</span><span className="OO">O</span><span className="oo">O</span></h1></div>

                <div >
                    <h1 className="cn">sign in</h1>
                    <p className="cn1">with your Fundoo Account</p>
                </div>

                <div className="E">
                    <TextField id="email" label="Email" variant="outlined" name="email" value={userLogin.email} onChange={handleInput}  error={errorObj.emailError} helperText={errorObj.emailHelper}  />
                </div>
            
                <div className="sn">
                    <TextField id="pass" label="Password" type="password" variant="outlined" name="password" value={userLogin.password} onChange={handleInput} error={errorObj.passwordError} helperText={errorObj.passwordHelper}/>
        
                </div>
                <a href="" className="sn1" > Forget password?</a>
                
                <div className="cr">
                  <a href="/signup" className="cr2">create account</a>
                    <Button className="cr1" variant="Contained" type="Submit"  onClick={handleClick}>Login</Button>

                </div>
                
            </div>
        </div>

    )
}
export default Login