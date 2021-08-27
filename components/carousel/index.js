import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselCar({dataCar}) {

    return (
        <div className="flex flex-row justify-center w-1/2">
            <div className="max-w-full h-full flex justify-center">
            <Carousel
                infiniteLoop
            >
                <div className="w-full h-full">
                    <img src={dataCar?.car?.img} className="h-full"/>
                    <p className="legend">{dataCar?.car?.car.toUpperCase()}</p>
                </div>
                <div className="w-full h-full">
                    <img src={dataCar?.car?.img} className="h-full"/>
                    <p className="legend">{dataCar?.car?.car.toUpperCase()}</p>
                </div>
                <div className="w-full h-full">
                    <img src={dataCar?.car?.img} className="h-full"/>
                    <p className="legend">{dataCar?.car?.car.toUpperCase()}</p>
                </div>
            </Carousel>
            </div>
        </div>
    );
}
