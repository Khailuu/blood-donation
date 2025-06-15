import { Navigate } from 'react-router-dom';
import { authService } from '../../services/authService';

const ProtectedRoute = ({ children }) => {
  if (!authService.getCurrentUser()) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoute;