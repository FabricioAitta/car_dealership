import React from 'react'

export default function DataCar({dataCar}){
    
    return (
        <div className="container box-border max-w-full max-h-full flex flex-col justify-between items-center text-lg font-extralight">
            <div className="w-full flex flex-row justify-center items-center">
                <p className="w-3/4">Marca: {dataCar?.car?.car}</p>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <p className="w-3/4">Año: {dataCar?.car?.year}</p>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <p className="w-3/4">Dueño: {dataCar?.car?.owner}</p>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <p className="w-3/4">Precio: ${dataCar?.car?.price}</p>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <p className="w-3/4">Descripción: {dataCar?.car?.description}</p>        
            </div>
        </div>
    )
}

