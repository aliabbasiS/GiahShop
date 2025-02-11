import Dashboard from "../view/Dashboard/Dashboard";
import MainPage from "../view/Home/Main";
import Login from "../view/Login/signin";
import signin from "./../view/Login/Login";



const routes = [{ path: "/main", element:MainPage  },{ path: "/dashboard", element:Dashboard  },{path:'/signin',element:signin},{path:'/Login',element:Login}];
export default routes;
