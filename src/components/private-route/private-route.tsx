import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {ReactElement} from 'react';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: ReactElement;
}

function PrivateRoute({...props}: PrivateRouteProps): ReactElement {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
