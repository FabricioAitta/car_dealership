import Image from 'next/image'
import logo from '../../public/nort.jpg';

export default function Home() {
    return (
        <div className="container max-w-full h-full flex flex-row justify-center items-center bg-red-300">
            <Image src={logo} alt="logo" />
        </div>
    )
}