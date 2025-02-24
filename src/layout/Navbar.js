'use client'
import "../app/globals.css";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import MenuIcon from '@mui/icons-material/Menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import * as React from "react"

 
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"; // Adjust path
import { ListItem } from "@mui/material";
import  Insights  from "@/layout/header/Insights";
import Services from "./header/Services";
import More from "./header/More";


export function NavbarDemo() {
  

  return (
    

    <header className="fixed top-0 left-0 w-full py-4 h-[100px] z-50 bg-white text-black dark:text-white dark:bg-black flex items-center justify-between shadow-md main_header">
          {/* ShadCN Navigation Menu */}
          <NavigationMenu className='my-auto'>
          <div className="flex flex-col items-center">

              {/* Company Logo */}
              <Link href='/'> <img src="/assets/aaslogo.png" className="h-[70px] mx-10" alt=""  /></Link>
          </div>
             
            <NavigationMenuList className="relative flex jsutify-center items-center ">
            
              {/* Static More section 1 */}
              <NavigationMenuItem className="group hidden lg:block">
                <NavigationMenuTrigger className="text-xl">Insights</NavigationMenuTrigger>
                <NavigationMenuContent className=" transition-all duration-300 group-hover:w-[100vw] ">
                
                  <ul className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]  ">
                      <ListItem className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]">
                        <Insights/>
                        
                      </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
               {/* services */}
              <NavigationMenuItem className="group hidden lg:block">
                <NavigationMenuTrigger className="text-xl">Services</NavigationMenuTrigger>
                <NavigationMenuContent className=" transition-all duration-300 group-hover:w-[100vw] ">
                
                  <ul className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]  ">
                      <ListItem className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]">
                        <Services/>
                        
                      </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* more */}
              <NavigationMenuItem className="group hidden lg:block">
                <NavigationMenuTrigger className="text-xl">More</NavigationMenuTrigger>
                <NavigationMenuContent className=" transition-all duration-300 group-hover:w-[100vw] ">
                
                  <ul className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]  ">
                      <ListItem className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]">
                        <More/>
                        
                      </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>


            </NavigationMenuList>

          </NavigationMenu>


           <div className="flex justify-center items-center space-x-4 mx-3 sm:mx-10">
         
              <Link href={`/contact`}  className=" cursor-pointer">
              <button className='rounded-[10px]  text-xl bg-black text-white hover:text-black hover:bg-[#AF9A57] py-3 px-7 transition-colors duration-300'>Get in Touch</button>
           
              </Link>
     
             <Sheet className="" >
                  <SheetTrigger className="block lg:hidden">
                  <MenuIcon style={{ height: "35px", width: "35px" }} />

                    {/* <MenuIcon className="transition-all h-[55px] w-[55px]" /> */}
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle></SheetTitle>
                      <SheetDescription className='py-3'>
                        <Accordion type="single" collapsible className="w-full">
                        
                        
                      
                        
                      
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="p-4 transition-colors duration-300 text-[1.5rem]">Insights</AccordionTrigger>
                            <AccordionContent className="w-full flex flex-col text-[1rem]">
                              <Link href="/case-studies" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">About US</Link>
                              <Link href="/mission" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Team</Link>
                              <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Blog</Link>
                              <Link href="/route4-1" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Connect with us</Link>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="p-4 transition-colors duration-300 text-[1.5rem]">Services</AccordionTrigger>
                            <AccordionContent className="w-full flex flex-col text-[1rem]">
                              <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">About US</Link>
                              <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Team</Link>
                              <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Blog</Link>
                              <Link href="/services" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Connect with us</Link>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger className="p-4 transition-colors duration-300 text-[1.5rem]">About us</AccordionTrigger>
                            <AccordionContent className="w-full flex flex-col text-[1rem]">
                              <Link href="/about-us" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">About US</Link>
                              <Link href="/team" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Team</Link>
                              <Link href="/blog" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Blog</Link>
                              <Link href="/contact" className="p-4 border-l-4 border-transparent hover:border-l-[#000] dark:hover:border-l-[#fff] transition-colors duration-300 text-left">Connect with us</Link>
                            </AccordionContent>
                          </AccordionItem>
                        
                      
                        </Accordion>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
              </Sheet>
           </div>
  
  
</header>

  );
}

function Navbar() {
  const [active, setActive] = useState(null);
  return (
 <div className={cn("flex-grow max-w-2xl mx-auto z-20 hidden lg:block")}>
      <Menu setActive={setActive}  >
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Insights">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Blog"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Case Stdies"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/overview">Overview</HoveredLink>
            <HoveredLink href="/about-us">About us</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/career">Careers</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/contact">Connect with us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
