import Image from "next/image";
import Link from "next/link";

import herald from "@/assets/images/abyss-herald-2.webp";

const About = () => {
    return (
        <div className="flex items-center">
            <div className="flex justify-center items-center h-[100vh] w-[100%] relative">
                <div className="flex items-center 2lg:flex-row sm:flex-col font-lato text-lg 2xl:h-[600px] sm:h-max w-[900px]
                                px-5 py-5 backdrop-blur-xl rounded-xl border border-[#ffffff3d]">
                    <div className="sm:text-white lg:text-black dark:lg:text-white">
                        <span className="sm:text-2xl xl:text-3xl font-teyvat hover:font-lato hover:font-bold">Abyss</span>
                        &nbsp;&nbsp;website that generates a player&#39;s profile and transforms it into a customized card design.&nbsp;
                        I developed this website as a part of my portfolio, and it is available as an open-source project on GitHub.&nbsp;
                        You can view it&nbsp;
                        <Link href="https://github.com/Ritz404" className="text-sky-300">here</Link>.
                        <br/><br/>
                        <span className="sm:text-2xl xl:text-3xl font-teyvat hover:font-lato hover:font-bold">Ritz</span>
                        &nbsp;&nbsp;is not affiliated to HoYoverse. All contents and materials are trademarks and copyrights of HoYoverse.
                    </div>
                    <div className="lg:ml-10 sm:w-[150px] sm:mt-5 2lg:mt-0 2lg:w-[500px]">
                        <Image src={herald} alt="Abyss Herald"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
