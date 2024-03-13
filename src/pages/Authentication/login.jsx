import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { supabase } from "../../client";

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    // Check for token in session storage and auto-login if exists
    const token = sessionStorage.getItem('token');
    if (token) {
      setToken(token);
      navigate('/dash');
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!formData.email || !formData.password) {
      setError('Email and password are required. Fields cannot be left empty.');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        throw error;
      }

      // Store token in session storage
      sessionStorage.setItem('token', data);
      
      // Redirect to dashboard on successful login
      setToken(data);
      navigate('/dash');
    } catch (error) {
      // Handle specific error cases
      if (error.message === 'Invalid credentials') {
        setError('Incorrect email or password. Please try again.');
      } else {
        setError(error.message);
      }
      // Clear input fields
      setFormData({
        email: '',
        password: '',  
      });
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-no-repeat bg-cover bg-center ">
        <div className="flex justify-center items-center pt-40 mx-5">
          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-white justify-center text-5xl leading-tighter font-bold">Green House</h1>
            </div>
            {error && <p className="text-xs text-center">{error}</p>}
            <div className="flex justify-center mt-3">
              <div className="inline text-green-800 ">
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
                  type="password"
                  name="password"
                  variant="underlined"
                  placeholder="Password"
                  className="w-[350px] px-2 py-1 mb-5"
                  value={formData.password}
                  onChange={handleChanges}
                />
              </div>
            </div>
            <div className="flex justify-center mt-1">
              <input type="submit" value="Sign in" className="w-3/4 px-2 py-1.5 mb-2 outline-none cursor-pointer rounded-sm border border-[#3c3c3c] bg-[#252525] hover:border-green-500 duration-700" />
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
