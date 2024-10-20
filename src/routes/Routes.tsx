
import { Routes, Route } from 'react-router-dom';
import { routes } from './router.data';

const Router = () => (
  <Routes>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.element}
      />
    ))}
  </Routes>
);

export default Router;
