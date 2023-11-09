import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const [showLoginMessage, setShowLoginMessage] = useState(false);



const ProtectedRoute = ({ component: Component, auth, setShowLoginMessage, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <div>
            {setShowLoginMessage(true)}
            <LoginForm />
          </div>
        )
      }
    />
  );
};


export default ProtectedRoute;