import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Tooltip,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  
} from "@nextui-org/react";
import React from "react";
 
import { NavLink } from "react-router-dom";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-2xl text-white">Green House</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex font-semibold text-[#545454] gap-4" justify="center">
        <NavbarItem>
          <NavLink className="hover:text-white duration-700" color="foreground" to="/">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
        <Tooltip showArrow={true} content="Documentation" className="bg-green-700 text-white">
          <NavLink className="hover:text-white duration-700" color="foreground" to="doc">
            Docs
          </NavLink>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <NavLink className="hover:text-white duration-700" color="foreground" to="about">
           About Us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className="hover:text-white duration-700" color="foreground" to="contact">
            Contact
          </NavLink>
        </NavbarItem>
       
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <NavLink className="bg-white hover:bg-green-700 hover:text-white duration-700 rounded-md text-black py-[5px] px-4 font-medium" to="login" variant="flat">
            Login
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu  className="bg-black bg-opacity-100 text-slate-600"  >
        <NavbarMenuItem>
          <NavLink color="foreground" className="hover:text-white duration-700" to="/">
            Home
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <NavLink className="hover:text-white duration-700" color="foreground" to="doc">
            Docs
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink color="foreground"  className="hover:text-white duration-700" to="about">
            About
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NavLink color="foreground"  className="hover:text-white duration-700" to="contact">
            Contact
          </NavLink>
        </NavbarMenuItem>
         
      </NavbarMenu>
    </Navbar>
  );
}
