import React from "react";

function Footer() {
    return (
        <>
            <div className="bg-[#0B24FB] flex flex-row justify-between items-center px-6 py-[17px]">
                <div>
                    <div className="text-xs text-white">
                        <span className="font-bold text-base">wknd@</span>2020
                    </div>
                </div>
                <div className="">
                    <div className="text-xs text-white border rounded-full px-2">
                        alpha version 0.1
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
