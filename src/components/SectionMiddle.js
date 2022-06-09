import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SectionMiddle() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="relative mb-12 w-full h-full">
            <img src="assets/png/Group-4.png" className="absolute object-contain h-40 w-40 right-0" data-aos="fade-left" alt="astronaut-2" />
            <div className="bg-[#EEBECE] h-[648px] w-full flex flex-col justify-center lg:items-stretch">
                <div className="px-8 text-right font-semibold text-lg mt-36 mb-4 lg:w-[619px] lg:self-center">
                    <span className="text-[#0B24FB] font-bold">Deffinition; </span>a practice or exercise to test or improve one's fitness for athletic
                    competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving
                    difficulties. Merriam-Webster.com Dictionary.
                    <p className="mb-[120px] text-white italic lg:self-end lg:mt-7">-weekend team</p>
                </div>
                <div className="absolute text-4xl font-bold text-white bottom-9 left-6 z-20">Testimonial</div>
                <img src="assets/svg/Oval.svg" alt="oval" className="absolute w-[89px] h-[89px] bottom-14 left-10" />
            </div>
        </div>
    );
}

export default SectionMiddle;
