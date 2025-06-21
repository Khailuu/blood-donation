import { Navigate } from 'react-router-dom';
import { authService } from '../../services/authService';

const RoleRoute = ({ children, allowedRoles }) => {
  const user = authService.getCurrentUser();
  
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return children;
};

export default RoleRoute;