import React from 'react'

import { Space_Grotesk } from "next/font/google";
import { useRef, useState } from "react";
import {
    motion
} from "framer-motion";
import Image from "next/image";

const font = Space_Grotesk({ weight: "300", subsets: ["latin"] });

const AboutComponent = () => {

    const ref = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && (
                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-70 z-0"></div>
            )}
            <div className={`top-[101vh] absolute ${font.className}`} >
                <div className="flex flex-col justify-center items-center p-10 mt-[10%] gap-10 w-full " id="aboutUs">
                    <motion.div ref={ref}>
                        <Image
                            src={"/kopi1.jpeg"}
                            alt="jpg"
                            width={600}
                            height={600}
                            quality={100}
                            className="flex items-center justify-center shadow-lg outline"
                        />
                    </motion.div>
                    <br />
                    <motion.div
                    >
                        <h1 className="mb-10 text-6xl font-bold text-center underline">About Us</h1>
                        <p className="text-justify text-lg xl:mx-[15%] lg:mx-[15%] mx-[5%]">
                            Gayo Permata Coffee is growing well in Permata sub-district, Bener
                            Meriah Regency, Aceh Province. Permata is frequently called as
                            wilayah selimut kabut (foggy place) because the place is located
                            along the hillside of geureudong mountain which is fertile area
                            for agricultural activities. The experience of our farmers has
                            been passed from generation to generation for decades. Currently,
                            our coffee processing is held by the second generation to the
                            third generation. This legacy makes us want to contribute directly
                            to the world market, keep coffee sustainable, and have a good
                            impact on humans and the environment This long experience, then
                            supported by the strong and complex character of Gayo coffee has
                            made our coffee well received in several countries in Asia,
                            America and Europe in a sustainable manner.
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default AboutComponent