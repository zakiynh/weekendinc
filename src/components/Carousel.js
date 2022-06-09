import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function Carousel() {
    const settings = {
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    };
    const settingsLg = {
        arrows: true,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
    };
    const testimonies = useSelector((state) => state.testimony.testimony);
    return (
        <div className="absolute inset-y-[650px] right-0 lg:right-[23%] lg:z-20">
            {window.innerWidth < 768 ? (
                <Slider className="flex h-[140px] w-[358px] lg:w-[700px]" {...settings}>
                    {testimonies.map((testimony) => (
                        <div key={testimony.id}>
                            <div className="h-[140px] w-[247px] flex flex-col bg-white mr-4 p-4 ">
                                <div>
                                    <div className="font-bold text-2xl ">{testimony.by}</div>
                                    <div className="text-sm mt-3">{testimony.testimony}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <Slider className="flex h-[140px] w-[358px] lg:w-[700px]" {...settingsLg}>
                    {testimonies.map((testimony) => (
                        <div key={testimony.id}>
                            <div className="h-[140px] w-[247px] flex flex-col bg-white mr-4 p-4 ">
                                <div>
                                    <div className="font-bold text-2xl ">{testimony.by}</div>
                                    <div className="text-sm mt-3">{testimony.testimony}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}
