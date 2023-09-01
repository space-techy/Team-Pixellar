import React, { useState } from "react";
import { TiTimes, TiThMenu } from "react-icons/ti";

const NavbarItem = ({ label, setOpen, ...rest }) => {
  return (
    <a
      className="mx-4 my-4 duration-500 hover:text-slate-500 active:text-slate-700"
      onClick={() => setOpen((open) => (open ? !open : false))}
      {...rest}
    >
      {label.toUpperCase()}
    </a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 w-full bg-black">
      <nav className="flex items-center justify-between p-2">
        <div className=" w-16 ml-11">
          <img src="logo.png" alt="Logo" />
        </div>

        <div className="hidden md:flex text-white">
          <NavbarItem setOpen={setOpen} href="#home" label="home" />
          <NavbarItem setOpen={setOpen} href="#about" label="about" />
          <NavbarItem setOpen={setOpen} href="#gallery" label="Gallery" />
          {/* <NavbarItem
            setOpen={setOpen}
            href="#getinvolved"
            label="Get Involved"
          /> */}
          <NavbarItem setOpen={setOpen} href="#Missions" label="Missions" />
          <NavbarItem setOpen={setOpen} href="#Timeline" label="Timeline" />
        </div>
        <div className="cursor-pointer duration-500 hover:text-slate-500 active:text-slate-700 md:hidden text-white">
          {!open ? (
            <TiThMenu onClick={() => setOpen(!open)} size={25} />
          ) : (
            <TiTimes onClick={() => setOpen(!open)} size={25} />
          )}
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`flex flex-col items-center duration-500 ${
          open ? "" : "hidden"
        }`}
      >
        <NavbarItem setOpen={setOpen} href="#home" label="home" />
        <NavbarItem setOpen={setOpen} href="#events" label="events" />
        <NavbarItem setOpen={setOpen} href="#expos" label="Expos & Speakers" />
        <NavbarItem
          setOpen={setOpen}
          href="#getinvolved"
          label="Get Involved"
        />
        <NavbarItem setOpen={setOpen} href="#sponsors" label="Sponsors" />
        <NavbarItem setOpen={setOpen} href="#contact" label="Contact" />
      </div>

      <hr className="border-slate-600" />
    </header>
  );
};

export default Navbar;
