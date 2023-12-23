import { Outlet, useLocation } from "react-router-dom";
import MainNav from "../components/private/sidenav";
import Footer from "../components/menu/footer";

const BaseLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";
  const isDashPage = location.pathname === "/Dash";

  return (
    <div>
      {!isLoginPage && !isSignUpPage && !isDashPage &&<MainNav/>}
      <main>
        <Outlet />
      </main>
      {!isDashPage && <Footer/>}
    </div>
  );
};

export default BaseLayout;
