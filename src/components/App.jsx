import { Routes, Route } from 'react-router-dom';
import { ContactsPage } from '../pages/Contacts';
import { HomePage } from '../pages/Home';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/ErrorPage';
import { RegistrationPage } from 'pages/Register';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout.jsx/Layout';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegistrationPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
};
