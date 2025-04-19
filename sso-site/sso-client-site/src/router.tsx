import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  )
);