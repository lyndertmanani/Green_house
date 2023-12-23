import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import BaseLayout from "./layouts/Base.layout";
import Home  from "./pages/home";
import Doc from "./pages/doc";
import Learning from "./pages/learn";
import Contact from "./pages/contact";
import Login from "./pages/Authentication/login";
import Signup from "./pages/Authentication/signup";
import Settings from "./pages/Authentication/data/settings";
import Dash from "./pages/Authentication/data/data.dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<BaseLayout />}>
    <Route index element={<Home/>}/>
    <Route path="Doc" element={<Doc/>}/>
    <Route path="about" element={<Learning/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Signup" element={<Signup/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="Settings" element={<Settings/>}/>
    <Route path="Dash" element={<Dash/>}/>
  </Route>)
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;