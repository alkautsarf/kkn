import React from 'react'
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
import {
    motion,
    useMotionValue,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { useRouter } from "next/router";

const fontTitle = Space_Grotesk({ weight: "400", subsets: ["latin"] });
const font = Space_Grotesk({ weight: "300", subsets: ["latin"] });

const HeroComponents = () => {

    const router = useRouter()
    const x = useMotionValue(0);

    const [isOpen, setIsOpen] = useState(false);
    const [textColor, setTextColor] = useState("text-[#F9F6EE]");
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 1000) setTextColor("text-black duration-500");
        else setTextColor("text-[#F9F6EE]");
    });
    return (
        <>
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-20 z-0 "></div>
            <video
                src={require(`../../../public/video${Math.floor(Math.random() * 3) + 1
                    }.mp4`)}
                autoPlay
                loop
                muted
                className="w-[100%] h-[100%] object-cover absolute"
            />
            <motion.div
                className={`xl:pt-10 xl:pl-10 md:pt-8 md:pl-8 pt-3 pl-3 top-0 z-20 sticky ${textColor}`}
                style={{ x }}
                id="title"
            >
                {!isOpen ? (
                    <>
                        <h1
                            className={`xl:text-9xl text-7xl md:text-9xl ml-1 xl:ml-0 md:xl-0 ${fontTitle.className}`}
                        >
                            KKN
                        </h1>
                        <h1
                            className={`xl:text-2xl text-sm md:text-xl pl-2 md:pl-3 ${font.className}`}
                        >
                            Kopi Kaya Nusantara
                        </h1>
                    </>
                ) : (
                    ""
                )}
            </motion.div>
            <motion.div
                className={`top-[35%] right-0 z-20 absolute text-white p-5 xl:p-10 md:p-10 text-left xl:text-7xl text-4xl md:text-6xl ${fontTitle.className}`}
            >
                {!isOpen ? (
                    <>
                        <h1>GAYO</h1>
                        <h1>BOLD</h1>
                        <h1>RICH</h1>
                    </>
                ) : (
                    ""
                )}
            </motion.div>
            {isOpen ? (
                <>
                    <div
                        className="absolute top-0 right-0 z-20 mt-10 lg:p-10 xl:p-10 xl:mr-10 lg:mr-10 hover:cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F9F6EE"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-x xl:w-[100px] lg:w-[100px] xl:h-[100px] lg:h-[100px] w-[60px] h-[60px]"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </div>
                    <div className="absolute top-0 z-20 pt-10 pl-10 text-white">
                        <h1
                            className={`xl:text-9xl text-7xl md:text-9xl ml-1 xl:ml-0 md:xl-0 ${fontTitle.className}`}
                        >
                            KKN
                        </h1>
                        <h1
                            className={`xl:text-2xl text-sm md:text-xl pl-2 md:pl-3 ${font.className}`}
                        >
                            Kopi Kaya Nusantara
                        </h1>
                    </div>
                    <div
                        className={`top-[35%] left-0 z-20 absolute text-white pt-10 pl-10 xl:p-10 md:p-10 text-left xl:text-6xl text-4xl md:text-6xl  ${fontTitle.className}`}
                    >
                        <h1 className="hover:cursor-pointer hover:scale-[103%] transition-transform" onClick={e => {
                            e.preventDefault()
                            setIsOpen(false)
                            router.push('#aboutUs')
                        }}>
                            About Us
                        </h1>
                        <h1 className="my-7 hover:cursor-pointer hover:scale-[103%] transition-transform">
                            Products
                        </h1>
                        <h1 className="hover:cursor-pointer hover:scale-[103%] transition-transform">
                            Galeries
                        </h1>
                    </div>
                </>
            ) : (
                <div
                    className="absolute top-0 right-0 z-20 lg:p-10 xl:p-10 xl:mr-10 lg:mr-10 hover:cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(true);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: "rotate(270deg)" }}
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#F9F6EE"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-tally-3"
                    >
                        <path d="M4 4v16" />
                        <path d="M9 4v16" />
                        <path d="M14 4v16" />
                    </svg>
                </div>
            )}
        </>
    )
}

export default HeroComponents