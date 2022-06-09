import React from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SectionBottom() {
    const { helpTips } = useSelector((state) => state.helpTips);
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    AOS.refresh();
    }, []);
    return (
        <div className="bg-[#000000] lg:relative h-full w-full pt-28 lg:items-center lg:flex lg:flex-col">
            <div className="p-8 text-white lg:w-[619px] lg:text-center">
                <div className="font-bold text-2xl ">POV</div>
                <div className="font-bold text-base mt-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                </div>
            </div>
            <div className="p-8 text-white lg:w-[619px] lg:text-center">
                <div className="font-bold text-2xl ">Resource</div>
                <div className="font-bold text-base mt-7">
                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents
                    our being able to do what we like best
                </div>
            </div>
            <div className="p-8 text-white lg:text-center">
                <div className="font-bold text-2xl ">Help & Tips</div>
                <div className="font-bold text-base mt-7 lg:flex lg:gap-x-2 lg:w-[933px]">
                    {helpTips.map((helpTip) => (
                        <>
                            <div className="w-full mb-4 relative" data-aos="fade-up">
                                <div>
                                    <img src={helpTip.image} alt="img-2" className="w-full" />
                                </div>
                                <div className="w-full h-[77px] bg-black bg-opacity-50 absolute bottom-0 grid grid-cols-6 justify-between items-center">
                                    <div className="col-span-5 px-4">{helpTip.title}</div>
                                    <div className=" bg-white rounded-full h-8 w-8 flex items-center lg:h-10 lg:w-10">
                                        <i className="mx-auto fa-solid fa-arrow-right text-[#0B24FB]"></i>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="p-8 text-white lg:w-[619px] lg:text-center lg:mb-[200px]">
                <div className="font-bold text-2xl ">You’re all set.</div>
                <div className="font-bold text-base mt-7">The wise man therefore always holds in these matters to this principle of selection.</div>
            </div>
            <div className="pt-12 lg:absolute lg:bottom-0 lg:left-0">
                <img src="assets/png/Group-3.png" className="object-fill h-[337px] w-[253px]" alt="bg-astronot-rev" />
            </div>
        </div>
    );
}

export default SectionBottom;
