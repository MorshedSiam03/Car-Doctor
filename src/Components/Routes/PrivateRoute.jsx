import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="relative h-64">
        <progress className="progress w-56 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/Login" replace></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;
