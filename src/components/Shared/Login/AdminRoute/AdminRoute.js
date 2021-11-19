import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();

    if (isLoading) {
        return (
            <div>
                <h5>Please wait a bit...</h5>
                <img src="https://i.ibb.co/bJJx03Y/Fountain.gif" alt="" className="d-flex justify-content-center align-items-center" />
            </div>
        );
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
export default AdminRoute;