import Login from "../pages/login";
import Register from "../pages/register";

const routes = [
  {
    component: () => <Login />,
    path: "/login",
  },
  {
    component: () => <Register />,
    path: "/register",
  },
];

export default routes;
