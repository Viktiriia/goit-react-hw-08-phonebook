import { Routes, Route } from 'react-router-dom';
import LoginPage from 'components/LoginPage/LoginPage';
import RegisterPage from 'components/RegisterPage/RegisterPage';
import ContactsPage from './ContactsPage/ContactsPage';
import HomePage from 'components/HomePage/HomePage';
import { Suspense, useEffect } from 'react';
import Navigation from 'components/Navigation/Navigation';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'Redux/Authorization/authReducer';
import RestictedRoute from 'Redux/Authorization/RestictedRoute';
import PrivateRoute from 'Redux/Authorization/PrivateRoute';
const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}
