import { NavLink } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { supabase } from "../../client";

const Signup = () => {
  const [formData, setFormData] = useState({
    Username: '',
    email: '',
    password: '',
    Phone: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form
    if (!formData.Username) {
      setError('Username is required');
      return;
    }
  
    if (!formData.email) {
      setError('Email is required');
      return;
    }
  
    if (!formData.password) {
      setError('Password is required');
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match,Check and try again');
      return;
    }
  
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            Phone:formData.Phone,
            Username: formData.Username,
          },
        },
      });
  
      if (error) {
        throw error;
      }
  
      // Set success message
      setSuccessMessage('Check your email for verification');
      // Clear input fields
      setFormData({
        Username: '',
        email: '',
        password: '',
        Phone: '',
        confirmPassword: ''
      });
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <>
      <div className="w-full h-screen bg-no-repeat bg-cover bg-center ">
        <div className="flex justify-center items-center pt-40 mx-5">
          <form onSubmit={handleSubmit} method="POST" className="w-full max-w-sm">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-white justify-center text-5xl leading-tighter font-bold">Green House</h1>
            </div>
            {error && !successMessage && <p className="text-center">{error}</p>}
            {successMessage && !error && <p className="text-center">{successMessage}</p>}
            <div className="flex justify-center mt-3">
              <div className="inline text-green-800 ">
                <Input
                  type="text"
                  variant="underlined"
                  name="Username"
                  placeholder="Username"
                  className="w-[350px] px-2 py-1"
                  value={formData.Username}
                  onChange={handleChanges}
                />
                <Input
                  type="email"
                  name="email"
                  variant="underlined"
                  placeholder="Email"
                  className="w-[350px] px-2 py-1"
                  value={formData.email}
                  onChange={handleChanges}
                />
                <Input
                  type="cell"
                  name="Phone"
                  variant="underlined"
                  placeholder=" Phone"
                  className="w-[350px] px-2 py-1 mb-5"
                  value={formData.Phone}
                  onChange={handleChanges}
                />
                <Input
                  type="password"
                  name="password"
                  variant="underlined"
                  placeholder="Password"
                  className="w-[350px] px-2 py-1 mb-5"
                  value={formData.password}
                  onChange={handleChanges}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  variant="underlined"
                  placeholder="Confirm Password"
                  className="w-[350px] px-2 py-1 mb-5"
                  value={formData.confirmPassword}
                  onChange={handleChanges}
                />
           
              </div>
            </div>
            <div className="flex justify-center mt-1">
              <input type="submit" value="Sign up" className="w-3/4 px-2 py-1.5 mb-2 outline-none cursor-pointer rounded-sm border border-[#3c3c3c] bg-[#252525] hover:border-green-500 duration-700" />
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
