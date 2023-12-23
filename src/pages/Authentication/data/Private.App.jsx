import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  
  
  import PvtLayout from "../../../layouts/Private.layout";
  import Home  from "../../home";
  import Doc from "../../doc";
  import Learning from "../../learn";
  import Contact from "../../contact";
  import Login from "../login";
  import Signup from "../signup";
  import Settings from "./settings";
  import Dash from "./data.dashboard";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<PvtLayout />}>
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
  
  function Pvtapp() {
    return (
      <RouterProvider router={router} />
    )
  }
  
  export default Pvtapp;