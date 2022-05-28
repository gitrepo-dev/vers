import './App.css';
import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { ProtectedRouter, PublicRouter } from 'routers'
const NotFound = React.lazy(() => import('pages/NotFound'));
const Home = React.lazy(() => import('pages/home'));
const Single = React.lazy(() => import('pages/single'));
const Profile = React.lazy(() => import('pages/profile'));
const Login = React.lazy(() => import('components/login'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicRouter />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
