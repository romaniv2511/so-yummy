import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/welcome',
}) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
