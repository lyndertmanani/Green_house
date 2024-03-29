import { Outlet, useLocation } from "react-router-dom";
import MainNav from "../components/menu/navbar";
import Footer from "../components/menu/footer";
import Sidenav from "../components/private/sidenav";
import Topnav from "../components/private/topnav";

const BaseLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";
  const isDashPage = location.pathname === "/dash";
  const isHomePage = location.pathname ==="/";
  const isDocPage = location.pathname ==="/doc";
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const isDatadawerPage = location.pathname === "/datadawer";
  const isSettingUpPage = location.pathname ==="/settings"
  return (
    <>
      {!isLoginPage && !isSignUpPage && !isHomePage &&  !isDocPage && !isAboutPage && !isContactPage &&  <Sidenav/>}
      {!isLoginPage && !isSignUpPage && !isDashPage && !isDatadawerPage && !isSettingUpPage &&<MainNav/>}
      {!isLoginPage && !isSignUpPage && !isHomePage &&  !isDocPage && !isAboutPage && !isContactPage &&!isSettingUpPage &&  <Topnav/>}
      <main>
        <Outlet />
      </main>
      {!isDashPage&& !isDatadawerPage &&<Footer/>}
    </>
  );
};

export default BaseLayout;
