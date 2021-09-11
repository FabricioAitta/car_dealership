import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function Header({ brand }) {

    const [visible, setVisible] = useState('hidden')
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e) => {
        if(visible == 'hidden') return setVisible('block')
        return setVisible('hidden')
    }

    return (
        <nav className="container fixed z-50 max-w-full bg-gray-800">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between max-h-full h-16">
                <div className="flex items-center">
                <div className="flex-shrink-0 hover:cursor-pointer">
                <Link
                    href={{
                        pathname: "/",
                    }}
                >
                    <img
                        className="h-8 w-8"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbWO4syA2ASctO98x8OkLld-ILcmz9xBvcg&usqp=CAU"
                        alt="Workflow"
                    />
                </Link>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <div
                        href="#"
                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                    <Link
                        href={{
                        pathname: "/",
                        }}
                    >
                        ¿Quíenes somos?
                    </Link>
                    </div>

                    <div
                        href="#"
                        className="relative inline-block text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        <div>
                            <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-700"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={(e) => handleClick(e)}
                            >
                            Unidades
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="false"
                            >
                                <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </button>
                        </div>

                        <div
                            className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${visible}`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                                {brand?.map(b => {
                                    return(
                                        <div key={b.name}>
                                        <Link
                                                href={{
                                                pathname: `/${b.name}`,
                                                query: {b}
                                                }}
                                                >
                                            <a
                                                
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500 hover:bg-gray-700"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-0"
                                                name={b.name}
                                                onClick={(e) => handleClick(e)}
                                            >
                                                    {b.name.toUpperCase()}
                                            </a>
                                        </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Contacto
                    </div>

                    <div
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
                    >
                        <Link
                        href={{
                        pathname: "/login",
                        }}
                        >
                            Login
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>

                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>
                </div>
            </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {() => (
                    <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div
                        className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                        <Link
                            href={{
                            pathname: "/",
                            }}
                        >
                            ¿Quiénes sómos?
                        </Link>
                        </div>

                        <div
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 w-5/12 rounded-md text-base font-medium"
                        >
                        <div>
                            <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            onClick={() => handleClick()}
                            >
                            Unidades
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="false"
                            >
                                <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </button>
                        </div>

                        <div
                            className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${visible}`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                                {brand?.map(b => {
                                    return(
                                        <a
                                            key={b.name}
                                            href="#"
                                            className="text-gray-700 block px-4 py-2 text-sm hover:text-red-500 hover:bg-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-0"
                                            onClick={() => handleClick(key)}
                                        >
                                            {b.name.toUpperCase()}
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        </div>

                        <div
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block hover:cursor-pointer px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                        Contacto
                        </div>

                        <div
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block hover:cursor-pointer px-3 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsOpen(!isOpen)}
                        >
                        Login
                        </div>
                    </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}
