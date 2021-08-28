import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
    faUserCircle,
    faCarSide,
    faEnvelope,
    faHouseUser,
} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Header({ myRef, brand }) {

    const [visible, setVisible] = useState('hidden')

    const handleClick = () => {
        if(visible == 'hidden') return setVisible('block')
        return setVisible('hidden')
    }

    return (
        <div
        className="container fixed z-50 max-w-full h-16 flex items-center bg-black text-white"
        ref={myRef}
        >
        <ul className="container flex flex-row flex-wrap justify-around">
            <li className="hover:cursor-pointer hover:text-red-500 flex flex-row items-center justify-center text-lg font-bold">
            <FontAwesomeIcon icon={faHouseUser} size="2x"></FontAwesomeIcon>
            <Link
                href={{
                pathname: "/",
                }}
            >
                ¿Quíenes somos?
            </Link>
            </li>
            <div className="relative inline-block text-left">
            <div>
                <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-700"
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
                            >
                                {b.name.toUpperCase()}
                            </a>
                        )
                    })}
                </div>
            </div>
            </div>
            <li className="hover:cursor-pointer hover:text-red-500 flex flex-row items-center justify-center text-lg font-bold">
            <FontAwesomeIcon icon={faUserCircle} size="2x"></FontAwesomeIcon>Mi
            plan
            </li>
            <li className="hover:cursor-pointer hover:text-red-500 flex flex-row items-center justify-center text-lg font-bold">
            <FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>
            Contacto
            </li>
        </ul>
        </div>
    );
}
