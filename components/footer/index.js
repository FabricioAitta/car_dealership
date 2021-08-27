import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Footer({executeScroll}) {

    return (
        <div className="container max-w-full h-12 flex items-center bg-black text-white bottom-0 fixed">   
            <ul className="container flex flex-row flex-wrap justify-around w-3/5">
                    <li>Av. Libertad 039, CP 1264, Santiago del Estero, Capital</li>
                    <li>&copy; 2021 NORT MOTORS</li>
            </ul>
            <ul className="container flex flex-row flex-wrap justify-around w-2/5">
                <li>
                    <li>Términos y Cóndiciones</li>
                </li>
            </ul>
            <div className="flex h-full flex-row items-center justify-center pr-2">
                <i className="hover:cursor-pointer" onClick={() => executeScroll()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x"></FontAwesomeIcon></i>
            </div>
        </div>
    )
}
