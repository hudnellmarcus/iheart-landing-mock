'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex w-full bg-iheart-red text-white px-4 z-10">
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-center">
            <Image
              src="/iHeartRadio_Logo_iHR Horizontal Black 2.png"
              alt="logo"
              className="ml-2 md:ml-6 mr-2 md:mr-6"
              width={100}
              height={100}
              style={{ width: "min(80px)", height: "auto" }}
              priority
            />
            {/* Desktop Nav Links */}
            <div className="hidden md:flex px-4 space-x-5">
              <Link href="/">Offers</Link>
              <Link href="/">Benefits</Link>
              <Link href="/">Perks</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Redeemed Rewards</Link>
            </div>
          </div>
          {/* Right Side Elements */}
          <div className="flex items-center">
            {/* Icons */}
            <div className="flex items-center space-x-2 px-2 md:px-4">
              <Image
                src="/ri_question-fill.png"
                alt="question"
                className=""
                width={25}
                height={25}
              />
              <Image
                src="/ri_notification-2-fill.png"
                alt="notification"
                className=""
                width={25}
                height={25}
              />
            </div>
            {/* User Info visible on desktop only */}
            <div className="hidden md:flex items-center space-x-2 px-4">
              <div className="rounded-full bg-white py-2 px-2">
                <h2 className="text-black text-sm">JW</h2>
              </div>
              <h2 className="text-sm px-2">Jillian W.</h2>
            </div>
            {/* Mobile Only */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Connect the toggleMenu function to the button */}
              <button className="p-1" aria-label="Menu" onClick={toggleMenu}>
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay  */}
      {isOpen && (
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleMenu}
      />
        )}
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-4/5 bg-white h-screen max-w-xs z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'
           } md:hidden overflow-y-hidden`}
      >
        {/* Close button and title */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="text-xl font-medium text-iheart-red">Menu</span>
          <button onClick={toggleMenu} className="p-2" aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="#C6002B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className="py-2">
          <Link href="/" className="flex items-center px-4 py-3 border-b border-gray-200">
           <Image
              src="/offers_mobile.png"
              alt="offers"
              className="ml-2 mr-2"
              width={20}
              height={20}
              style={{ width: "min(20px)", height: "auto" }}
            />
            <span>Offers</span>
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 border-b border-gray-200">
           <Image
              src="/benefits_mobile.png"
              alt="benefits"
              className="ml-2 mr-2"
              width={20}
              height={20}
              style={{ width: "min(20px)", height: "auto" }}
            />
            <span>Benefits</span>
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 border-b border-gray-200">
           <Image
              src="/perks_mobile.png"
              alt="perks"
              className="ml-2 mr-2"
              width={20}
              height={20}
              style={{ width: "min(20px)", height: "auto" }}
            />
            <span>Perks</span>
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 border-b border-gray-200">
           <Image
              src="/shop_mobile.png"
              alt="shop"
              className="ml-2 mr-2"
              width={20}
              height={20}
              style={{ width: "min(20px)", height: "auto" }}
            />
            <span>Shop</span>
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 border-b border-gray-200">
           <Image
              src="/redeemed_mobile.png"
              alt="redeemed rewards"
              className="ml-2 mr-2"
              width={20}
              height={20}
              style={{ width: "min(20px)", height: "auto" }}
            />
            <span>Redeemed Rewards</span>
          </Link>
        </nav>

        {/* user section  */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 py-4 px-4">
          <div className="flex items-center">
            <div className="rounded-full bg-iheart-red text-white w-10 h-10 flex items-center justify-center">
              <span>JW</span>
            </div>
            <div className="ml-3">
              <p className="font-medium">Jillian W.</p>
              <p className="text-sm text-gray-500">Account Settings</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;