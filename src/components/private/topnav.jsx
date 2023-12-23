import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    
  } from "@nextui-org/react";
  import React from "react";
   
  import { NavLink } from "react-router-dom";
  
  export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    return (
        <div className="flex lg:hidden">
      <Navbar onMenuOpenChange={setIsMenuOpen} >
        <NavbarContent> 
          <NavbarBrand>
            <p className="font-bold text-2xl text-white">Green House</p>
          </NavbarBrand>
      
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=" "
          />
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
      </div>
    );
  }
  