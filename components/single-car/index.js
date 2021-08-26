import React from 'react'

export default function DataCar({dataCar}){
    
    return (
        <div className="container box-border max-w-full h-full flex flex-col items-center justify-center w-full mt-5">
            <p className="w-1/2 flex flex-row items-center justify-start">Marca: {dataCar?.car?.car}</p>
            <p className="w-1/2 flex flex-row items-center justify-start">Año: {dataCar?.car?.year}</p>
            <p className="w-1/2 flex flex-row items-center justify-start">Dueño: {dataCar?.car?.owner}</p>
            <p className="w-1/2 flex flex-row items-center justify-start">Precio: ${dataCar?.car?.price}</p>
            <p className="w-1/2 flex flex-row items-center justify-start">Descripción: {dataCar?.car?.description}</p>        
        </div>
    )
}

