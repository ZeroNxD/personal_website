import { Badge } from "@/components/ui/badge"
import { FaReact, FaGithub, FaFigma, FaAngular, FaJava, FaLaravel, FaHtml5, FaCss3Alt, } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ProjectList = () => {
    const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto items-stretch items-start max-w-6xl p-6">
            <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col gap-8 p-4 py-8 rounded-xl bg-gradient-to-b from-gray-200/70 to-gray-300/70 dark:from-slate-800/70 dark:to-slate-900/70 backdrop-blur-md border-2 border-black dark:border-white/30">
                <img src="/images/INTI-Website.png" alt="" className="rounded-lg w-full aspect-video object-cover border-2 border-gray-700 dark:border-gray-400" loading="lazy"/>
                <div className="flex flex-col gap-4 items-center h-full flex-1">
                    <h1 className="font-bebas tracking-wider text-2xl lg:text-3xl text-center">Company Profile Website INTI</h1>
                    <div className="flex flex-col gap-8 text-center items-center">
                        <p className="text-xs lg:text-base font-semibold text-gray-600 dark:text-gray-200">{t("projectpage.projectlist.project_1.description")}</p>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bebas tracking-widest text-xl lg:text-2xl">{t("projectpage.projectlist.project_1.techstack")}</h1>
                            <div className="flex flex-row flex-wrap gap-4 max-w-3xl justify-center">
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                    >
                                    <FaReact className="!w-4 !h-4 lg:!w-5 lg:!h-5"/>
                                    <p className="text-xs lg:text-sm font-bold">React</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <RiTailwindCssFill className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Tailwind</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <BiLogoTypescript className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">TypeScript</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaFigma className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Figma</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaGithub className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">GitHub / GitHub Project</p>
                                </Badge>
                        
                                
                            </div>
                        </div>
                    </div>  
                    <div className="flex flex-row gap-4 justify-center mt-auto">
                        <a href="https://inti-ai.com" target="_blank" rel="noopener noreferrer">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="bg-transparent border-2 !border-black dark:!border-white hover:!bg-[#08a6a8] hover:!text-white cursor-pointer text-xs lg:text-sm font-semibold transition-color duration-300 ease-in-out"
                            >
                                {t("projectpage.button.visit")}
                                <FaArrowUpRightFromSquare />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="flex flex-col gap-8 p-4 py-8 rounded-xl bg-gradient-to-b from-gray-200/70 to-gray-300/70 dark:from-slate-800/70 dark:to-slate-900/70 backdrop-blur-md border-2 border-black dark:border-white/30">
                <img src="/images/InCustoms-Website.png" alt="" className="rounded-lg w-full aspect-video object-cover border-2 border-gray-400" loading="lazy"/>
                <div className="flex flex-col gap-4 items-center h-full flex-1">
                    <h1 className="font-bebas tracking-wider text-2xl lg:text-3xl text-center">InCustoms</h1>
                    <div className="flex flex-col gap-8 text-center items-center">
                        <p className="text-xs lg:text-base font-semibold text-gray-600 dark:text-gray-200">
                            {t("projectpage.projectlist.project_2.description")}
                        </p>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bebas tracking-widest text-xl lg:text-2xl">{t("projectpage.projectlist.project_2.techstack")}</h1>
                            <div className="flex flex-row flex-wrap gap-4 max-w-3xl justify-center">
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                    >
                                    <FaAngular className="!w-4 !h-4 lg:!w-5 lg:!h-5"/>
                                    <p className="text-xs lg:text-sm font-bold">Angular</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <RiTailwindCssFill className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Tailwind</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <BiLogoTypescript className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">TypeScript</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <SiSpringboot  className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Springboot</p>
                                </Badge>
                        
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaJava  className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Java</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaGithub className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">GitHub / GitHub Project</p>
                                </Badge>
                        
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaFigma className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Figma</p>
                                </Badge>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-6 justify-center">
                            <a href="https://incustoms.id" target="_blank" rel="noopener noreferrer">
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="bg-transparent border-2 !border-black dark:!border-white hover:!bg-[#08a6a8] hover:!text-white cursor-pointer text-xs lg:text-sm font-semibold transition-color duration-300 ease-in-out"
                                >
                                {t("projectpage.button.visit")}                                    <FaArrowUpRightFromSquare />
                                </Button>
                            </a>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto items-stretch items-start max-w-6xl p-6">
            <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col gap-8 p-4 py-8 rounded-xl bg-gradient-to-b from-gray-200/70 to-gray-300/70 dark:from-slate-800/70 dark:to-slate-900/70 backdrop-blur-md border-2 border-black dark:border-white/30">
                <img src="/images/InMeterai-website.png" alt="" className="rounded-lg w-full aspect-video object-cover border-2 border-gray-700 dark:border-gray-400" loading="lazy"/>
                <div className="flex flex-col gap-4 items-center h-full flex-1">
                    <h1 className="font-bebas tracking-wider text-2xl lg:text-3xl text-center">InMeterai</h1>
                    <div className="flex flex-col gap-8 text-center items-center">
                        <p className="text-xs lg:text-base font-semibold text-gray-600 dark:text-gray-200">
                            {t("projectpage.projectlist.project_3.description")}
                        </p>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bebas tracking-widest text-xl lg:text-2xl">{t("projectpage.projectlist.project_3.techstack")}</h1>
                            <div className="flex flex-row flex-wrap gap-4 max-w-3xl justify-center">
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                    >
                                    <FaReact className="!w-4 !h-4 lg:!w-5 lg:!h-5"/>
                                    <p className="text-xs lg:text-sm font-bold">React</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <RiTailwindCssFill className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Tailwind</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <BiLogoTypescript className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">TypeScript</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaFigma className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">Figma</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaGithub className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">GitHub / GitHub Project</p>
                                </Badge>
                            </div>
                        </div>
                    </div>  
                    <div className="flex flex-row gap-4 mt-6 justify-center mt-auto">
                        <a href="https://inmeterai.id" target="_blank" rel="noopener noreferrer">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="bg-transparent border-2 !border-black dark:!border-white hover:!bg-[#08a6a8] hover:!text-white cursor-pointer text-xs lg:text-sm font-semibold transition-color duration-300 ease-in-out"
                            >
                                {t("projectpage.button.visit")}                                <FaArrowUpRightFromSquare />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="flex flex-col gap-8 p-4 py-8 rounded-xl bg-gradient-to-b from-gray-200/70 to-gray-300/70 dark:from-slate-800/70 dark:to-slate-900/70 backdrop-blur-md border-2 border-black dark:border-white/30">
                <img src="/images/CuyKerja-website.png" alt="" className="rounded-lg w-full aspect-video object-cover border-2 border-gray-700 dark:border-gray-400" loading="lazy"/>
                <div className="flex flex-col gap-4 items-center h-full flex-1">
                    <h1 className="font-bebas tracking-wider text-2xl lg:text-3xl text-center">CuyKerja</h1>
                    <div className="flex flex-col gap-8 text-center items-center">
                        <p className="text-xs lg:text-base font-semibold text-gray-600 dark:text-gray-200">
                            {t("projectpage.projectlist.project_4.description")}
                        </p>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bebas tracking-widest text-xl lg:text-2xl">{t("projectpage.projectlist.project_4.techstack")}</h1>
                            <div className="flex flex-row flex-wrap gap-4 max-w-3xl justify-center">
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaLaravel className="!w-4 !h-4 lg:!w-5 lg:!h-5 " />
                                    <p className="text-xs lg:text-sm font-bold">Laravel</p>
                                </Badge>
                        
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaHtml5 className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">HTML</p>
                                </Badge>
                        
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <FaCss3Alt  className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">CSS</p>
                                </Badge>
                        
                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <IoLogoJavascript  className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">JavaScript</p>
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                                >
                                    <SiMysql className="!w-4 !h-4 lg:!w-5 lg:!h-5" />
                                    <p className="text-xs lg:text-sm font-bold">MySQL</p>
                                </Badge>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-6 justify-center">
                            <a href="https://github.com/ZeroNxD/CuyKerja" target="_blank" rel="noopener noreferrer">
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="bg-transparent border-2 !border-black dark:!border-white hover:!bg-[#08a6a8] hover:!text-white cursor-pointer text-xs lg:text-sm font-semibold transition-color duration-300 ease-in-out"
                                >
                                {t("projectpage.button.code")}                                    <FaGithub />
                                </Button>
                            </a>
                        </div>
                    </div> 
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectList