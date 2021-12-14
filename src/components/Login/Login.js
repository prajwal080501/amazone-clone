import React, {useState} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import "./Login.css";
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate("/");
            })
            .catch((error) => alert(error.message));
        
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //user gets successfully created
            
                console.log(auth);
                if (auth) {
                    navigate("/");
                }
                if (!auth) {
                    navigate("/login");
                }
        })
            .catch((error) => {
                alert(error.message);
            });
             
    }

    return (
        <div className="login">
            <Link to="/" >
            <img className="login__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="" className="login__form">
                    <h5>Email</h5>
                    <input placeholder="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={signin} className="login__signinButton">Sign in</button>
                </form>
                <p className="login__notice">By signing-in you agree to Amazon's Conditios of use & Sales. Please see our Privacy Notice, Our Cookies Notice and our Interests based ad notice</p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
