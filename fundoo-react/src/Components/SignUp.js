import React,{ useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import './SignUp.css';
import gmailImage from './Images/Gmail.jpg';
import { Checkbox } from "@mui/material";


const Register = () => {
    const firstNameregex = /^[a-zA-Z ]{2,30}$/;
    const lastNameregex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: ""

    });
    const [errorObj, setErrorObj] = useState({
        firstNameerror: false,
        firstNamehelper: "",
        lastNameerror: false,
        lastNamehelper: "",
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: ""
    })
    let name, value;

    const handleInput = (y) => {
        name = y.target.name;
        value = y.target.value
        setUserInput({ ...userInput, [name]: value });
    }
    const handleClick =  async () => {
        let firstNametest = firstNameregex.test(userInput.firstName)
       let lastNametest = lastNameregex.test(userInput.lastName)
        let emailTest = emailRegex.test(userInput.email);
        let passwordTest = passwordRegex.test(userInput.password);

        if (firstNametest == false) {
            setErrorObj((prevState) => ({
                ...prevState,
                firstNameerrorrror: true,
                firstNamehelper: "enter correct Name"
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                firstNameerror: false,
                firstNamehelper: ""
            }));
        }
        if (lastNametest == false) {
            setErrorObj((prevState) => ({
                ...prevState,
                lastNameerror: true,
                lastNamehelper: "enter correct Name"

            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                lastNameerror: false,
                lastNamehelper: ""
            }));
        }
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
        console.log(userInput);
    }
    return (
        <div className="name">

            <div className="name1">
                <div className="T"><h1 className="H"><span className="f">F</span><span className="u">U</span><span className="n">N</span><span className="d">D</span><span className="O">O</span><span className="o">O</span></h1>
                </div>

                <div >
                    <h2 className="cs2">create your FundooNotes App Account</h2>
                </div>
                <div className="cname">
                    <TextField id="firstName" label="FirstName" variant="outlined" required  name="firstName" value={userInput.firstName} onChange={handleInput}  error={errorObj.firstNameerror} helperText={errorObj.firstNamehelper}/>

                    <TextField id="lastname" className="ln" label="LastName" variant="outlined" required name="lastName" value={userInput.lastName} onChange={handleInput} error={errorObj.lastNamehelper} helperText={errorObj.lastNamehelper} />
                </div>


                <div className="us">
                    <TextField id="username" label="Email" variant="outlined" required name="email" value={userInput.email} onChange={handleInput} error={errorObj.emailError} helperText={errorObj.emailHelper} />
                </div >
                <p className="cs">you can use letters,numbers&periods</p>
                <p className="cs1">Use your Email Instead</p>

                <div className="signin">
                    <TextField id="password" label="Password" type="password" variant="outlined" required name="password" value={userInput.password} onChange={handleInput} error={errorObj.passwordError} helperText={errorObj.passwordHelper} />

                    <TextField id="confirm Password" className="sm" label="Confirm Password" type="password" name="confirmpassword" variant="outlined" required value={userInput.confirmpassword} onChange={handleInput}  />
                </div>
                <p className="es">Use 8 or more characters with a mix of letters,numbers & symbols</p>
                <div className="cb"><Checkbox></Checkbox>Show Password</div>
                <div className="center">
                    <a href="Login.js" className="center2" > Sign In Instead</a>
                    <Button className="center1" variant="Contained" type="Submit" onClick={handleClick} >Register</Button>

                </div>
            </div>
            <div className="Image">
                <img  src={gmailImage}  alt="GmailImage"></img>
            </div>
        </div>

    )
}
export default Register