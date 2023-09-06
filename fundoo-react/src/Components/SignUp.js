import React,{ useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import './SignUp.css';
import gmailImage from './Images/Gmail.jpg';
import { Checkbox } from "@mui/material";


const Register = () => {
    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: ""

    });
    let name, value;

    const handleInput = (y) => {
        name = y.target.name;
        value = y.target.value
        setUserInput({ ...userInput, [name]: value });
    }
    const handleClick =  async () => {
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
                    <TextField id="firstName" label="FirstName" variant="outlined" required  name="firstName" value={userInput.firstName} onChange={handleInput}/>

                    <TextField id="lastname" className="ln" label="LastName" variant="outlined" required name="lastName" value={userInput.lastName} onChange={handleInput} />
                </div>


                <div className="us">
                    <TextField id="username" label="Email" variant="outlined" required name="email" value={userInput.email} onChange={handleInput} />
                </div >
                <p className="cs">you can use letters,numbers&periods</p>
                <p className="cs1">Use your Email Instead</p>

                <div className="signin">
                    <TextField id="password" label="Password" type="password" variant="outlined" required name="password" value={userInput.password} onChange={handleInput} />

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