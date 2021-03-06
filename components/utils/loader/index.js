import Load from 'react-loader-spinner';

export default function Loader (){
    return (
        <div className="flex flex-row items-center justify-center h-screen bg-black">
            <Load
                type="Puff"
                color="#EF4444"
                height={100}
                width={100}
                timeout={1500}
            />
        </div>
    )
}
