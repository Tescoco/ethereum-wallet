import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { useState } from "react";

interface NavbarItemProps {
  title: string;
  classProps: string;
}

const NavbarItem = ({ title, classProps }: NavbarItemProps) => {
  return <li className={`mx-4 cursor ${classProps}`}>{title}</li>;
};

type Props = {};

function Navbar({}: Props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center item-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
          <NavbarItem classProps="" key={i} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx -4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(!toggleMenu)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => (
              <NavbarItem
                classProps="my-2 text-lg text-white"
                key={i}
                title={item}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
