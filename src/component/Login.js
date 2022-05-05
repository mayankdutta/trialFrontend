import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    // to prevent the hack if someone types localhost:5000/login in the URL
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) navigate("/")
    }, [])

    const handleSubmit = async () => {
        let result = await fetch("http://localhost:5000/login/", {
            method: "post",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json",
            },
        });

        result = await result.json();

        // earlier it was result.user user moved inside after applying jwt.
        if (result.auth) {
            // we can't store json in local storage;
            localStorage.setItem("user", JSON.stringify(result.user))

            // we also need to set token in the localstorage of user.
            localStorage.setItem("token", JSON.stringify(result.token))
            navigate("/");

        } else {
            alert("please enter correct details")
        }
        console.warn(result);
    };
    return (
        <>
            <input
                placeholder="enter email"
                type="text"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                placeholder="enter password"
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button type="button" onClick={handleSubmit}>
                {" "}
                Login{" "}
            </button>
        </>
    );
};

export default Login;
