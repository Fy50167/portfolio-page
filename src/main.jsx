import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './Animation.scss';
import './App.css';
import App from './App';
import Welcome from './pages/Welcome';
import Error from './pages/Error';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/work',
        element: <Work />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
