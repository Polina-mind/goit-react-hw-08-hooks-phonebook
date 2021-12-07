import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "HomeView" */),
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);

const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/"><HomeView /></PublicRoute>
          
          <PublicRoute
            exact
            path="/register"
            restricted
            redirectTo="/contacts"
          >
            <RegisterView />
          </PublicRoute>

          <PublicRoute
            exact
            path="/login"
            restricted
            redirectTo="/contacts"
          >
            <LoginView />
          </PublicRoute>
        
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
          >
            <ContactsView />
          </PrivateRoute>
          
          <Route path="*" component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
