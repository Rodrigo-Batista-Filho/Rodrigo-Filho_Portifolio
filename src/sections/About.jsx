import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("batistafilhorodrigo@gmail.com");
        setHasCopied(true);
        setTimeout(() => {setHasCopied(false)}, 2000)
    }

    return (
        <section className={"c-space my-20"} id={"about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid1.png"} alt={"grid1"} className={"w-full sm:h-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Hi, I'm Rodrigo</p>
                            <p className={"grid-subtext"}>With two years of studying software development,
                                I have honed my skills in both frontend and backend development,
                                with a strong focus on creating engaging, animated 3D websites that blend functionality and creativity.</p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid2.png"} alt={"grid2"} className={"w-full sm:w-[276px] h-fit object-contain"}/>
                        <div>
                            <p className={"grid-headtext"}>Tech Stack</p>
                            <p className={"grid-subtext"}>I specialize in JavaScript/TypeScript, with a strong focus on building dynamic and scalable applications using React.js. My expertise allows me to deliver high-quality, user-centric web experiences.</p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"}>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0, 0, 0, 0)"}
                                backgroundImageOpacity={0.5}
                                showsAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>I work remotly across most timezones.</p>
                            <p className={"grid-subtext"}>I'm based in Brazil, with remote work available.</p>
                            <Button name={"Contact Me"} isBeam containerClass={"w-full mt-10"} />
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid3.png"} alt={"grid3"} className={"w-full sm:h-[326px] h-fit object-contain"} />
                        <div>
                            <p className={"grid-headtext"}>My Passion for Coding.</p>
                            <p className={"grid-subtext"}>I love solving problems and building things through code.
                                Coding isn't only the profession I strive to achieve, it is my passion!</p>
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src={"assets/grid4.png"} alt={"grid4"} className={"w-full xl:h-[200px] h-fit md:h-[126px] sm:h-[276px] object-contain sm:object-top"} />
                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>Conact Me</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt={"copy"}/>
                                <p className={"lg:text-2xl md:text-xl text-gray_gradient text-white"}>batistafilhorodrigo@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
