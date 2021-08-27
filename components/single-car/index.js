import React from 'react'

export default function DataCar({dataCar}){
    
    return (
        <div className="container box-border max-w-full flex flex-col justify-start items-center text-lg font-extralight w-1/2">
            <div className="underline text-3xl font-semibold mb-24">DETALLES</div>
            <div>
                <div className="w-full flex flex-row justify-center items-center">
                    <p className="text-xl w-full pb-5 font-semibold">Marca: <span className="font-extralight">{dataCar?.car?.car}</span></p>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <p className="text-xl w-full pb-5 font-semibold">Año: <span className="font-extralight">{dataCar?.car?.year}</span></p>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <p className="text-xl w-full pb-5 font-semibold">Dueño: <span className="font-extralight">{dataCar?.car?.owner}</span></p>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <p className="text-xl w-full pb-5 font-semibold">Precio: <span className="font-extralight">${dataCar?.car?.price}</span></p>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <p className="text-xl w-full pb-5 font-semibold">Descripción: <span className="font-extralight">{dataCar?.car?.description}</span></p>        
                </div>
            </div>
        </div>
    )
}

