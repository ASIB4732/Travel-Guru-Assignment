import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserId } from '../../App';

const PrivatRouat = ({ children, ...rest }) => {
    const [userInfo, setUserInfo]=useContext(UserId)
    return (
        <div>
                <Route
      {...rest}
      render={({ location }) =>
      userInfo.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivatRouat;