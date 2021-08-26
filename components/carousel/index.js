import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselCar() {

    return (
        <div className="flex flex-row justify-center">
            <div className="max-w-full h-full flex justify-center">
            <Carousel
                infiniteLoop
            >
                <div className="w-full h-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xWcjlOFeg1hG42zPgZN7msByzrv59vtk4g&usqp=CAU" className="h-full"/>
                    {/* <p className="legend">Auto</p> */}
                </div>
                <div className="w-full h-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xWcjlOFeg1hG42zPgZN7msByzrv59vtk4g&usqp=CAU" className="h-full"/>
                    {/* <p className="legend">Auto</p> */}
                </div>
                <div className="w-full h-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xWcjlOFeg1hG42zPgZN7msByzrv59vtk4g&usqp=CAU" className="h-full"/>
                    {/* <p className="legend">Auto</p> */}
                </div>
            </Carousel>
            </div>
        </div>
    );
}
