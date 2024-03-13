import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ element }) {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" replace={true} />;

  return element;
}

PrivateRoute.propTypes = {
  element: PropTypes.element,
};
