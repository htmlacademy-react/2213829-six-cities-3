
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { routes } from './router.data.js';

const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
            <Route
              key={routes.path}
              path={routes.path}
              element={<routes.component />}
            />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;