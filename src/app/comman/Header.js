"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PopupBox from "./PopupBox";
import EasyAccessForm from "../components/landing_page/EasyAccessForm";
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const handleHam = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="bg-[#FDF5FF] sticky top-0 z-10">
      <div className="container">
        <nav className=" py-4 flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/Logo.svg"
                alt="Melance Logo"
                width={387}
                height={100}
                className="w-[170px] md:w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="#"
              onClick={openPopup}
              className="text-white bg-white w-auto text-lg mr-4 flex items-center justify-between rounded-2xl py-[10px] px-[8px] request"
            >
              <Image
                src="/images/Mail.svg"
                alt="Mail Logo"
                className=""
                width={24}
                height={21}
              />
            </Link>
            <PopupBox isOpen={isOpen} onClose={closePopup} className="relative">
              <EasyAccessForm  closePopup={closePopup}/>
            </PopupBox>

            <div>
              <button className="bg-white rounded-full p-2" onClick={handleHam}>
                <Image src="/images/Menu.svg" alt="Menu Logo" width={24} height={24} />
              </button>
              {hamburger ? <SideBar hamburger={hamburger} setHamburger={setHamburger}/> : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
