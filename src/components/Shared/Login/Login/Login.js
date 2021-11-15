import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import * as BiIconName from "react-icons/bi";
import * as FcIconName from "react-icons/fc";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

import './Login.css';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }


    return (
        <div className="container mt-3">
            <div className="row">

                <div className="col-md-5 formDesign">
                    {
                        isLoading && <div>
                            <h5>Please wait a bit...</h5>
                            <img src="https://i.ibb.co/bJJx03Y/Fountain.gif" alt="" className="d-flex justify-content-center align-items-center" />
                        </div>
                    }

                    {
                        !isLoading && <Form onSubmit={handleLoginSubmit}>

                            {/* loign message */}
                            {
                                user.email && <Alert variant="success">
                                    login success
                                </Alert>
                            }

                            {
                                authError && <Alert variant="success">
                                    {authError}
                                </Alert>
                            }

                            <h1 className="mb-5">Login <BiIconName.BiLogInCircle /></h1>
                            <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                <Form.Control
                                    onChange={handleOnChange}
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className="inputDesign border-0 ps-0" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                                <Form.Control
                                    onChange={handleOnChange}
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="inputDesign border-0 ps-0" />
                            </Form.Group>

                            <Button className="w-100 btnDesign mt-2" type="submit">
                                Login
                            </Button>

                            <Button className="w-100 btnDesignGoogle mt-3" onClick={handleGoogleSignIn} >sign in with <FcIconName.FcGoogle /></Button>

                            <br />

                            <NavLink
                                className="linkTextDecoration text-center "
                                to="/register">
                                <p className="pt-3">Are You a New User? Please Register</p>
                            </NavLink>

                        </Form>
                    }

                </div>

                <div className="col-md-7">
                    <img src="https://i.ibb.co/7vnwMY0/Pin-Clipart-com-ceramics-clipart-1101409.png" alt="" className="w-100 pt-5" />
                </div>


            </div>
        </div>
    );
};

export default Login;