import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as BiIconName from "react-icons/bi";
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Registation = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.re_password) {
            alert("Password didn't match");
            e.preventDefault();
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }

    useEffect(() => {
        document.title = "Registation"
    }, []);

    return (
        <div className="container mt-3">

            <div className="row">
                <div className="col-md-5 formDesign">

                    {
                        isLoading ? <div>
                            <h5>Please wait a bit...</h5>
                            <img src="https://i.ibb.co/bJJx03Y/Fountain.gif" alt="" className="d-flex justify-content-center align-items-center" />
                        </div> :
                            <Form onSubmit={handleLoginSubmit}>


                                {
                                    user?.email && <p>User created successful!</p>
                                }
                                {
                                    authError && <p>{authError}</p>
                                }

                                <h1 className="mb-5">Register <BiIconName.BiLogInCircle /></h1>
                                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                    <Form.Control
                                        onBlur={handleOnBlur}
                                        type="text"
                                        name="name"
                                        placeholder="User name"
                                        className="inputDesign border-0 ps-0" />
                                </Form.Group>

                                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                                    <Form.Control
                                        onBlur={handleOnBlur}
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        className="inputDesign border-0 ps-0" />
                                </Form.Group>

                                <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                                    <Form.Control
                                        onBlur={handleOnBlur}
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        className="inputDesign border-0 ps-0" />
                                </Form.Group>

                                <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                                    <Form.Control
                                        onBlur={handleOnBlur}
                                        type="password"
                                        name="re_password"
                                        placeholder="Confirm password"
                                        className="inputDesign border-0 ps-0" />
                                </Form.Group>

                                <Button className="w-100 btnDesign mt-2" type="submit">
                                    Register
                                </Button>

                                <NavLink
                                    className="linkTextDecoration text-center "
                                    to="/login">
                                    <p className="pt-3">Already Registered? Please Login</p>
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

export default Registation;