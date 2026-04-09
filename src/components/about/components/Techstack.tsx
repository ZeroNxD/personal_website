import { Badge } from "@/components/ui/badge"
import { FaReact, FaAngular ,FaLaravel, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGithub, FaFigma } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Techstack = () => {
  const { t } = useTranslation();
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col gap-8 items-center">
      <h1 className="font-bebas tracking-widest text-4xl md:text-5xl">Tech Stack</h1>
      <div className="flex flex-row flex-wrap gap-4 max-w-3xl justify-center">
        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaReact className="!w-4 !h-4 md:!w-5 md:!h-5"/>
          <p className="text-xs md:text-sm font-bold">React</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaAngular  className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">Angular</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <RiTailwindCssFill className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">Tailwind</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <BiLogoTypescript className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">TypeScript</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaLaravel className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">Laravel</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaHtml5 className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">HTML</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaCss3Alt  className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">CSS</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <IoLogoJavascript  className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">JavaScript</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <SiSpringboot  className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">Springboot</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaJava  className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">Java</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaPython className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">Python</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <SiMysql className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">MySQL</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaGithub className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">GitHub / GitHub Project</p>
        </Badge>

        <Badge
          variant="outline"
          className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
        >
          <FaFigma className="!w-4 !h-4 md:!w-5 md:!h-5" />
          <p className="text-xs md:text-sm font-bold">Figma</p>
        </Badge>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 h-px bg-gray-800 dark:bg-gray-500"></div>
          <span className="text-xs md:text-sm text-gray-700 dark:text-gray-400 italic whitespace-nowrap">
            {t("aboutpage.information.techstack.staytune")}
          </span>
          <div className="flex-1 h-px bg-gray-800 dark:bg-gray-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Techstack