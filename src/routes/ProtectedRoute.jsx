import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useStore } from './../common/Context';

const ProtectedRoute = ({
  redirectPath = '/login',
  children
}) => {

  const [{user}, dispatch] = useStore();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div>
      {children}
    </div>
  );
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.element,
};

export default ProtectedRoute;
