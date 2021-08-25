import Link from 'next/link'

export default function Main() {

    const data = [
        {
            id:'1',
            car: 'fox volswagen',
            year: '2019',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'2',
            car: 'sandero gt line',
            year: '2021',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'3',
            car: 'amarok volswagen',
            year: '2018',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'4',
            car: 'fox volswagen',
            year: '2019',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'5',
            car: 'sandero gt line',
            year: '2021',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'6',
            car: 'amarok volswagen',
            year: '2018',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'7',
            car: 'fox volswagen',
            year: '2019',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'8',
            car: 'sandero gt line',
            year: '2021',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'9',
            car: 'amarok volswagen',
            year: '2018',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'10',
            car: 'fox volswagen',
            year: '2019',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'11',
            car: 'sandero gt line',
            year: '2021',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'12',
            car: 'amarok volswagen',
            year: '2018',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'13',
            car: 'fox volswagen',
            year: '2019',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'14',
            car: 'sandero gt line',
            year: '2021',
            owner: 'matias',
            price: '200000'
        },
        {
            id:'15',
            car: 'amarok volswagen',
            year: '2018',
            owner: 'matias',
            price: '200000'
        },
    ]

    return (
        <div className="container box-border max-w-full h-full flex flex-row flex-wrap justify-center items-center">   
            {data?.map((car, index) => {
                return(
                    <div className="flex justify-center items-center mx-2 mt-10 mb-10" key={index}>
                        <div
                            className="
                            bg-white
                            shadow-md
                            h-96
                            mx-3
                            rounded-3xl
                            flex flex-col
                            justify-around
                            items-center
                            overflow-hidden
                            sm:flex-row sm:h-52 sm:w-3/5
                            md:w-96
                            "
                        >
                            <img
                            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                            src="https://http2.mlstatic.com/D_NQ_NP_997360-MLA45566238777_042021-W.jpg"
                            alt="image"
                            />

                            <div
                            className="
                                flex-1
                                w-full
                                flex flex-col
                                items-baseline
                                justify-around
                                h-1/2
                                pl-6
                                sm:h-full sm:items-baseline sm:w-1/2
                            "
                            >
                            <div className="flex flex-col justify-start items-baseline">
                                <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
                                {car.car.toUpperCase()}
                                </h1>
                                <span className="text-xs text-indigo-300 mt-0">{car.owner.toUpperCase()}</span>
                            </div>
                            <p className="text-xs text-gray-500 w-4/5">
                                {car.year.toUpperCase()}
                            </p>
                            <div className="w-full flex justify-between items-center">
                                <h1 className="font-bold text-gray-500">${car.price.toUpperCase()}</h1>
                                <Link href={{
                                    pathname: `/car/${car.id}`,
                                    query: car,
                                }}>
                                <button
                                className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
                                >
                                Ver
                                </button>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                )
            })}
        </div>
    )
}
