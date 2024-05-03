import { Navigate } from "react-router-dom";

interface SecuredProps {
  children: React.ReactNode;
}

function ActiveRoute({ children }: SecuredProps) {
  if (localStorage.getItem("token") !== null) return <Navigate to="/blogs" />;

  return children;
}

export default ActiveRoute;
