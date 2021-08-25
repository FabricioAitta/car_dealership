import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faUserCircle, faCarSide, faEnvelope, faHouseUser } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Header({myRef}) {
    return (
        <div className="container fixed z-50 max-w-full h-16 flex items-center bg-black text-white" ref={myRef}>   
            <ul className="container flex flex-row flex-wrap justify-around">
            <li className="hover:cursor-pointer hover:text-red-500 flex flex-row items-center justify-center text-lg font-bold"><FontAwesomeIcon icon={faHouseUser} size="2x"></FontAwesomeIcon>¿Quíenes somos?</li>
                <li className="hover:cursor-pointer hover:text-red-500 flex flex-row items-center justify-center text-lg font-bold"><FontAwesomeIcon icon={faCarSide} size="2x"></FontAwesomeIcon>Unidades</li>
                <li className="hover:cursor-pointer hover:text-red-500 flex flex-row items-center justify-center text-lg font-bold"><FontAwesomeIcon icon={faUserCircle} size="2x"></FontAwesomeIcon>Mi plan</li>
                <li className="hover:cursor-pointer hover:text-red-500 flex flex-row items-center justify-center text-lg font-bold"><FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon>Contacto</li>
            </ul>
        </div>
    )
}
