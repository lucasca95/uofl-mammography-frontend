import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({
  component: Component,
  redirectUrl,
  user,
  hasPermissions = true,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return user && hasPermissions ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectUrl || "/login",
            }}
          />
        );
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  redirectUrl: PropTypes.string,
  user: PropTypes.any,
  hasPermissions: PropTypes.bool,
};

export default ProtectedRoute;
