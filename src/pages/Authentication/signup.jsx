import { NavLink } from "react-router-dom";
import { Input} from "@nextui-org/react";
import { useState } from "react";
import {supabase} from "../../client";

const Signup = () => {
const [fromData, setFromData] = useState({
  Username:'', email:'', password:'', 
})
 
console.log(fromData);

function handleChanges (event){
setFromData((prevFromData)=>{
return{
  ...prevFromData,
  [event.target.name]:event.target.value
}
})
}

async function handleSubmit(e) {
  e.preventDefault();
  try {
    const { data, error } = await supabase.auth.signUp({
      email: fromData.email,
      password: fromData.password,
      options: {
        data: {
          username: fromData.Username,
        },
      },
    });

    if (error) {
      throw error;
    }

    alert('Check your email for verification');
  } catch (error) {
    alert(error.message);
  }
}

    return (
     <>
      <div className="w-full h-screen bg-no-repeat bg-cover bg-center ">
        
        <div className="flex justify-center items-center pt-40 mx-5">
            <form onSubmit={handleSubmit} method="get" className="w-full max-w-sm">
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-white justify-center text-5xl leading-tighter font-bold">Green House</h1>
              
              </div>
              <div className="flex justify-center mt-3">
                <div className="inline text-green-800 ">
                <Input
              type="text"
              variant="underlined"
              name="Username"
              placeholder="Username"
              className="w-[350px] px-2 py-1  "
              onChange={handleChanges}
            />
                <Input
              type="email"
              name="email"
              variant="underlined"
              placeholder="Email"
              className="w-[350px] px-2 py-1  "
              onChange={handleChanges}
            />
             <Input
              type="password"
              name="password"
              variant="underlined"
              placeholder="Password"
              className="w-[350px] px-2 py-1 mb-5 "
              onChange={handleChanges}
            />
                     {/* <Input
              type="password"
              name="confirmPassword"
              variant="underlined"
              placeholder="Confirm Password"
              className="w-[350px] px-2 py-1 mb-5 "
              onChange={handleChanges}
            /> */}
                   
                </div>
              </div>
              <div className="flex justify-center mt-1">               
                  <input type="submit" value="Sign up" className="w-3/4 px-2 py-1.5 mb-2 outline-none cursor-pointer rounded-sm border border-[#3c3c3c] bg-[#252525] hover:border-green-500 duration-700"   />
                </div>
                <div className="flex justify-center mt-1">    
                <div className="inline-flex">
                   <p className="mr-2 hover:underline hover:text-[#4d4d4d] duration-700"><NavLink to="/login">Sign in</NavLink> |</p>
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
  
  export default Signup;