import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateProps) {
  if (localStorage.getItem("token") !== null) return children;

  return <Navigate to="/" />;
}

export default PrivateRoute;
