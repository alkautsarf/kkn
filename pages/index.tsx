import { NextPage } from "next";
import Head from "next/head";
import { Space_Grotesk } from "next/font/google";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useMotionValueEvent,
  useInView,
  useSpring,
  MotionValue
} from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'


const fontTitle = Space_Grotesk({ weight: "400", subsets: ["latin"] });
const font = Space_Grotesk({ weight: "300", subsets: ["latin"] });

type Video = {
  video: string
}

// export const getServerSideProps: GetServerSideProps<{
//   video: Video
// }> = async () => {
//   const res = await fetch('http://localhost:3000/api/video')
//   const video = await res.json()
//   return { props: { video } }
// }

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type ContentArray = [string, string, number, number];

const contents: ContentArray[] = [['About Us',`Gayo Permata Coffee is growing well in Permata sub-district, Bener
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
America and Europe in a sustainable manner.`, 600, 600], ['Our Products',`There are several types of coffee products that we offer based on the post-harvest process, this departs from our experience and research in post-harvest coffee processing, including natural, honey, full wash, wine, anaerobic processes. As for what has become superior to date is the process commonly used in Sumatra, namely giling basah (Wet Hulled) Process.`, 800, 800],['Testing 2',`Gayo Permata Coffee is growing well in Permata sub-district, Bener
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
America and Europe in a sustainable manner.`, 800, 800]]


interface Props {
  id: number;
  content: ContentArray;
}

function Kopi({ id, content }: Props) {
  const ref = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const x = useParallax(scrollXProgress, 300);
  const isEven = id % 2 == 0

  return (
    <>
    {isEven ? <section className={`snap-center flex justify-center items-center gap-10 h-screen mr-[5%] ${id === 1 ? 'ml-[15%]' : 'ml-[10%]'}`}>
    <motion.div style={{ y }} className="flex flex-col w-[50%] gap-10">
      <h1 className="text-5xl mb-10 text-center font-bold underline-offset-8 underline">{content[0]}</h1>
      <h2  className="flex text-start text-xl justify-center items-center">{content[1]}</h2>
      </motion.div>
        <div>
        <Image
              ref={ref}
              src={`/kopi${id}.jpeg`}
              alt="jpg"
              width={content[2]}
              height={content[3]}
              objectFit="contain"
              quality={100}
              loading="lazy"
              className="outline shadow-xl flex items-center justify-center object-contain"
            />
        </div>
    </section> : <section className={`snap-center flex justify-center items-center gap-10 h-screen mr-[5%] ${id === 1 ? 'ml-[20%]' : 'ml-[10%]'}`}>
        <div>
        <Image
              ref={ref}
              src={`/kopi${id}.jpeg`}
              alt="jpg"
              width={content[2]}
              height={content[3]}
              objectFit="contain"
              quality={100}
              loading="lazy"
              className="outline shadow-xl flex items-center justify-center object-contain"
            />
        </div>
      <motion.div style={{ y }} className="flex flex-col w-[50%] gap-10">
      <h1 className="text-5xl mb-10 text-center font-bold underline underline-offset-8">{content[0]}</h1>
      <h2  className="flex text-start text-xl justify-center items-center">{content[1]}</h2>
      </motion.div>
    </section>}
    </>
  );
}

const Index = (
//   {
//   video,
// }: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  // console.log(video);

  const ref = useRef(null);
  const { scrollYProgress, scrollXProgress } = useScroll({ target: ref });
  
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    
  const router = useRouter()
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2010], [0, 2010]);

  const [isOpen, setIsOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-[#F9F6EE]");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 900) setTextColor("text-black duration-500");
    else setTextColor("text-[#F9F6EE]");
  });

  return (
    <>
      <Head>
        <title>kkn</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <div className="w-full h-[500vh]"ref={ref}>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-20 z-0 snap-center"></div>
        <video
          src={require(`../public/video${
            Math.floor(Math.random() * 3) + 1
          }.mp4`)}
          autoPlay
          loop
          muted
          className="w-[100%] h-[100%] object-cover absolute snap-center"
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
              className="top-0 right-0 mt-10 lg:p-10 xl:p-10 xl:mr-10 lg:mr-10 z-20 absolute hover:cursor-pointer"
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
            <div className="top-0 absolute z-20 text-white pt-10 pl-10">
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
            className="top-0 right-0 lg:p-10 xl:p-10 xl:mr-10 lg:mr-10 z-20 absolute hover:cursor-pointer"
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

        {isOpen && (
          <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-70 z-0"></div>
        )}
        <div className={`top-[101vh] absolute ${font.className}`} >
          <div className="flex flex-col justify-center items-center p-10 mt-[5%] gap-10 w-full" id="aboutUs">
            {contents.map((content, idx) => (
        <Kopi id={idx + 1} content={content} />
      ))}
          </div>
        </div>
        <motion.div className="fixed left-0 right-0 h-[5px] bottom-[50px] bg-black" style={{ scaleX }} />
      </div>
    </>
  );
};

export default Index;
