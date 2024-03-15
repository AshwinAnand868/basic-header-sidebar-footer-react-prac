import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Layout from './layouts/Layout';
import About from './routes/About';
import Contact from './routes/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const AppComponent = Layout(App);

const AboutComponent = Layout(About);

const ContactComponent = Layout(Contact);


const router = createBrowserRouter([
  { path: '/', element: <AppComponent /> },
  { path: '/about', element: <AboutComponent /> },
  { path: '/contact', element: <ContactComponent /> },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
