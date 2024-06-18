// components/common/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = () => {
    const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// // components/common/PrivateRoute.js
// import React from 'react';
// import { Route } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import { useNavigate } from "react-router-dom";
//
// const PrivateRoute = ({ element: Element, ...rest }) => {
//     const { currentUser } = useAuth();
//     const navigate = useNavigate();
//
//     return (
//         <Route
//             {...rest}
//             render={(props) => {
//                 return currentUser ? (
//                     <Element {...props} />
//                 ) : (
//                     // <Redirect to="/login" /> // Redirect cannot be found in react-router-dom
//                     navigate('/')
//                 );
//
//             }}
//         />
//     );
// };
//
// export default PrivateRoute;