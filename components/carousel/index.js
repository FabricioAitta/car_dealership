import React from "react";
import Slider from "react-slick";

export default function CarouselCar() {
    let settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        // slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    };

    let images = [
        {
            id:1,
            msg: "hola"
        },
        {
            id:2,
            msg: "chau"
        },
        {
            id:3,
            msg: "jaja"
        }
    ]

    return (
        <Slider {...settings}>
            {images?.map(img => {
                return(
                    <div className="w-full h-full font-black">
                        <p className="w-full">{img.msg}</p>
                    </div>
                )
            })}
        </Slider>
    );
}
