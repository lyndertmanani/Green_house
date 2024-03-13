import React, { useState, useEffect } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import BaseLayout from './layouts/Base.layout';
import Home from './pages/home';
import Doc from './pages/doc';
import Learning from './pages/learn';
import Contact from './pages/contact';
import Login from './pages/Authentication/login';
import Signup from './pages/Authentication/signup';
import Settings from './pages/Authentication/data/settings';
import Dash from './pages/Authentication/data/data.dashboard';
import Datadawer from './pages/Authentication/data/data.dawer';

function App() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'));
      setToken(data);
    }
  }, []);

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token));
  }
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="doc" element={<Doc />} />
        <Route path="about" element={<Learning />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Login" element={<Login setToken={setToken} />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Settings" element={<Settings />} />
        {token ?<Route path="dash" element={<Dash token={token} />} /> : ''}
        {token ? <Route path="datadawer" element={<Datadawer />} /> : ''}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
