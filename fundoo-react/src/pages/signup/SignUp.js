import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
// import './SignUp.css';
import '././SignUp.css';
// import gmailImage from '../Images/Gmail.jpg';
// import gmailTmage from '../../Images/Gmail.jpg'
import gmailImage from '../../Images/Gmail.jpg'
import { Checkbox } from "@mui/material";
import { signup } from "../../Sevices/Userservices";


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
    const handleClick = async () => {
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
        if (firstNametest === true && lastNametest === true && emailTest === true && passwordTest === true) {
            let response = await signup(userInput);
            console.log(response);
            localStorage.setItem("token", response.data.data.userId);
        }
    }
    return (
        <header>
            <div className="Container">
                <div className="Container1">
                    <div className="Container2">
                        <div className="Container3">
                        <div className="fundoo">
                                <h1 id="fun" ><span className="f">F</span><span className="u">U</span><span className="n">N</span><span className="d">D</span><span className="O">O</span><span className="o">O</span></h1>

                                <h2 fullWidth id="text">create your FundooNotes App Account</h2>
                            </div>
                            <div className="names">
                                <div className="FirstName"> <TextField id="firstName" fullWidth label="FirstName" name="firstName" variant="outlined" required value={userInput.firstName} onChange={handleInput} error={errorObj.firstNameerror} helperText={errorObj.firstNamehelper} /></div>
                                <div className="LastName"><TextField id="lastname" fullWidth className="ln" label="lastName" name="lastName" variant="outlined" required value={userInput.lastName} onChange={handleInput} error={errorObj.lastNamehelper} helperText={errorObj.lastNamehelper} /></div>
                            </div>
                            <div className="email">
                                <TextField id="Email" label="Email" fullWidth variant="outlined" required name="email" value={userInput.email} onChange={handleInput} error={errorObj.emailError} helperText={errorObj.emailHelper} />
                            </div >
                            {/* <div className="first">
                    <p id="text">you can use letters,numbers&periods</p>
                    <p id="text">Use your Email Instead</p>
                    </div> */}
                            <div className="passwords">
                                <div className="password" > <TextField id="password" fullWidth label="Password" type="password" variant="outlined" required name="password" value={userInput.password} onChange={handleInput} error={errorObj.passwordError} helperText={errorObj.passwordHelper} /></div>

                                <div className="confirmpassword"><TextField id="confirm Password" className="sm" fullWidth label="Confirm Password" type="password" variant="outlined" required name="confirmpassword" value={userInput.confirmpassword} onChange={handleInput} /></div>
                            </div>
                            <p className="text">Use 8 or more characters with a mix of letters,numbers & symbols</p>
                            <div className="checkbox"><Checkbox></Checkbox>Show Password</div>
                            <div className="center">
                                <div > <a href="/" className="signin" > Sign In Instead</a></div>
                                <div> <Button className="button" variant="Contained" type="Submit" onClick={handleClick}>Register</Button></div>
                            </div>

                        </div>
                        <div className="image">
                            <img id="Image" src={gmailImage} alt="GmailImage"></img>
                            {/* <img src={gmailImage} height='50%' alt="GmailImage"></img> */}

                        </div>
                            {/* <div className="fundoo">
                                <h1 id="fun"><span className="f">F</span><span className="u">U</span><span className="n">N</span><span className="d">D</span><span className="O">O</span><span className="o">O</span></h1>

                                <h2 fullWidth id="text">create your FundooNotes App Account</h2>
                            </div>
                            <div className="names">
                                <div className="FirstName"><TextField id="firstName" label="FirstName" variant="outlined" required name="firstName" value={userInput.firstName} onChange={handleInput} error={errorObj.firstNameerror} helperText={errorObj.firstNamehelper} /></div>

                                <div className="LastName"><TextField id="lastname" className="ln" label="LastName" variant="outlined" required name="lastName" value={userInput.lastName} onChange={handleInput} error={errorObj.lastNamehelper} helperText={errorObj.lastNamehelper} /></div>
                            </div>


                            <div className="email">
                                <TextField id="Email" label="Email" fullWidth variant="outlined" required name="email" value={userInput.email} onChange={handleInput} error={errorObj.emailError} helperText={errorObj.emailHelper} />
                            </div >
                            <p className="cs">you can use letters,numbers&periods</p>
                            <p className="cs1">Use your Email Instead</p>

                            <div className="passwords">
                                <div className="passwords"> <TextField id="password" fullWidth label="Password" type="password" variant="outlined" required name="password" value={userInput.password} onChange={handleInput} error={errorObj.passwordError} helperText={errorObj.passwordHelper} /></div>

                                <div className="confirmpassword"> <TextField id="confirm Password"  fullWidth className="sm" label="Confirm Password" type="password" name="confirmpassword" variant="outlined" required value={userInput.confirmpassword} onChange={handleInput} /></div>
                            </div>
                            <p className="text">Use 8 or more characters with a mix of letters,numbers & symbols</p>
                            <div className="checkbox"><Checkbox></Checkbox>Show Password</div>
                            <div className="center">
                                <div><a href="/" className="signin" > Sign In Instead</a></div>
                                <div><Button className="button" variant="Contained" type="Submit" onClick={handleClick} >Register</Button></div>

                            </div>
                        </div>
                        <div className="image">
                            <img id="Image" src={gmailImage} alt="GmailImage"></img>
                        </div> */}
                    </div>
                </div>
            </div>


        </header >

    )
}
export default Register