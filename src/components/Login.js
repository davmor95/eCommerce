import React, {useState} from "react";
import './Login.css';


const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = event => {
        switch (event.target.name) {
            case "email": setEmail(event.target.value);
                break;
            case "password": setPassword(event.target.value);
                break;

        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        try {
            var currentUserInfo = {
                "email": email,
                "password": password
            };
            localStorage.setItem("currentUser", JSON.stringify(currentUserInfo));

            alert("Login Successful!!");
            console.log("going home");
        } catch (error) {
            alert("Login Unsuccessful!!");
            throw error;
        }
    }

    return (
        <div className="container fadeInDown">
            <div className="d-flex justify-content-center">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src="https://icon-library.com/images/health-food-icon/health-food-icon-17.jpg" className="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" name="email" className="form-control input_user" value={email} placeholder="username" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-2">
                                <input type="password" name="password" className="form-control input_pass" value={password} placeholder="password" onChange={handleChange} />
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="submit" name="submit" className="btn login_btn">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
