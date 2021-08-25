import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Footer({executeScroll}) {

    return (
        <div className="container max-w-full h-12 flex items-center bg-black text-white">   
            <ul className="container flex flex-row flex-wrap justify-around">
                <li>Desarrollado por @</li>
                <li>NORT MOTORS AUTOMOVILES</li>
                <li>SEGUINOS</li>
            </ul>
            <div className="flex h-full flex-row items-center justify-center self-end">
                <i className="hover:cursor-pointer" onClick={() => executeScroll()}><FontAwesomeIcon icon={faArrowAltCircleUp} size="2x"></FontAwesomeIcon></i>
            </div>
        </div>
    )
}
