import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Animation.scss';
import './App.css';
import App from './App';
import Welcome from './pages/Welcome';
import Error from './pages/Error';
import About from './pages/About';



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
        element: <About title = 'About'/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
