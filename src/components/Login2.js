import React, {useState} from "react";
import InputFields from "./InputFields";
import './Login2.css'

const Login2 =  (props) => {
    const  inputRefs = React.useRef([
        React.createRef(), React.createRef()
    ]);
    const [data, setData] = useState({});

    const handleChange = (name, value) => {
        setData(prevState => ({...prevState, [name]: value}))
    }

    const submitForm = (event) => {
        event.preventDefault();
        let isValid = true;

        for(let i = 0; i < inputRefs.current.length; i++) {
            const valid = inputRefs.current[i].current.validate();
            if(!valid) {
                isValid = false;
                break;
            }
        }
        if(!isValid) {
            return;
        }

        console.log("logged in")
    }

    console.log(data);
    return (
        <div>
            <form onSubmit={submitForm}>
                <InputFields
                    ref={inputRefs.current[0]}
                    name="username"
                    label="Username"
                    onChange={handleChange}
                    validation="required|min:6|max:12"
                />
                <InputFields
                    ref={inputRefs.current[1]}
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    validation="required|min:6"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login2;
