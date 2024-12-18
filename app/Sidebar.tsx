"use client";

import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex ${isOpen ? "w-64" : "w-20"} bg-gray-800 h-full`}>
            <div className="flex flex-col w-full">
                <button
                    className="text-white p-4 focus:outline-none"
                    onClick={toggleSidebar}
                >
                    {isOpen ? "Close" : "Open"}
                </button>
                <nav className="flex flex-col mt-4">
                    <Link href="/" legacyBehavior>
                        <a className="text-white p-4 hover:bg-gray-700">Home</a>
                    </Link>
                    {/* Uncomment and add more links as needed */}
                    {/* <Link href="/about" legacyBehavior>
            <a className="text-white p-4 hover:bg-gray-700">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white p-4 hover:bg-gray-700">Contact</a>
          </Link> */}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;