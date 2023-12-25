import { NavLink } from "react-router-dom";
import { Input} from "@nextui-org/react";

const Login = () => {
    return (
     <>
     <div className="w-full h-screen bg-no-repeat bg-cover bg-center ">
        
      <div className="flex justify-center items-center pt-40 mx-5">
          <form action="./dash" method="get" className="w-full max-w-sm">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-white justify-center text-5xl leading-tighter font-bold">Green House</h1>
               {/* <img src="../../assets/icons/pa sho yo-ticket_wht.png" className="h-14" alt="PashoyoMw_logo">   */}
            </div>
            <div className="flex justify-center mt-3">
              <div className="inline text-green-800 ">
              <Input
            type="text"
            variant="underlined"
            placeholder="Username /Email"
            className="w-[350px] px-2 py-1  "
          />
           <Input
            type="password"
            variant="underlined"
            placeholder="Password"
            className="w-[350px] px-2 py-1 mb-5 "
          />
                 
                 
              </div>
            </div>
            <div className="flex justify-center mt-1">               
                <input type="submit" value="Login" className="w-3/4 px-2 py-1.5 mb-2 outline-none cursor-pointer rounded-sm border border-[#3c3c3c] bg-[#252525] hover:border-green-500 duration-700"   />
              </div>
              <div className="flex justify-center mt-1">    
              <div className="inline-flex">
                 <p className="mr-2 hover:underline hover:text-[#4d4d4d] duration-700"><NavLink to="/signup">Sign up</NavLink> |</p>
                 <p className="mr-2 hover:underline hover:text-[#4d4d4d] duration-700"> <NavLink to="" className="mr-2">forgot Password ?</NavLink>|</p>
                 <p className="mr-2 hover:underline hover:text-[#4d4d4d] duration-700"><NavLink to="" className="mr-2">help</NavLink></p>
                </div>
              </div>
          </form>
        </div>
        </div>
     </>
    );
  };
  
  export default Login;