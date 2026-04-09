import { FaCalendar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";
import { FaRobot, FaGlobe, FaCode, FaMedal } from "react-icons/fa"
import { TbSettingsSearch, TbBinaryTreeFilled } from "react-icons/tb";
import { BiMath } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 items-center">
        <h1 data-aos="fade-right" data-aos-duration="1500" className="font-bebas tracking-widest text-4xl md:text-5xl text-center">
          {t("aboutpage.information.education.jumbotron")}
        </h1>

        <div data-aos="fade-up-right" data-aos-duration="1500" className="flex flex-col gap-10 w-full"> 
          <div className="border-3 border-black dark:border-white rounded-md p-4 lg:p-8 backdrop-blur-xl hover:bg-gray-400/10 dark:hover:bg-gray-500/10 transition-color duration-300 ease-in-out">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 w-full">
              {/* Kiri */}
              <div className="flex flex-col gap-4 w-full lg:w-2/3 break-words">
                <div className="flex flex-row gap-2.5 md:gap-4 lg:gap-6 min-w-0">
                  <div className="aspect-square w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-white p-2 flex items-center rounded-md justify-center shrink-0">
                    <img
                      src="/images/BINUS.png"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col gap-1 lg:gap-3 min-w-0">
                    <h1 className="font-bebas tracking-wider text-lg md:text-2xl lg:text-3xl">{t("aboutpage.information.education.school1.name")}</h1>
                    <div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm text-gray-700 dark:text-gray-400 italic">
                      <p className="flex gap-2 items-center"><FaCalendar /> 2022 - 2026</p>
                      <p className="flex gap-2 items-center"><IoLocation /> Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="flex flex-col gap-2">
                    <h1 className="flex gap-2 items-center text-sm lg:text-base font-bold justify-center lg:justify-start">
                      <GiGraduateCap className="text-lg md:text-xl lg:text-2xl"/>
                      {t("aboutpage.information.education.school1.bachelor")}
                    </h1>
                    <h1 className="text-xs lg:text-sm text-gray-700 dark:text-gray-300 max-w-xl">
                      {t("aboutpage.information.education.school1.description")}
                    </h1>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h1 className="flex gap-2 items-center text-base font-bold justify-center lg:justify-start">
                      <TbTargetArrow className="text-lg md:text-xl lg:text-2xl"/>
                      {t("aboutpage.information.education.school1.area")}
                    </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                      >
                        <TbSettingsSearch className="!w-4 !h-4"/>
                        <p className="text-xs font-bold">{t("aboutpage.information.education.school1.algorithm")}</p>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                      >
                        <FaRobot className="!w-4 !h-4"/>
                        <p className="text-xs font-bold">{t("aboutpage.information.education.school1.AI")}</p>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                      >
                        <FaGlobe className="!w-4 !h-4"/>
                        <p className="text-xs font-bold">{t("aboutpage.information.education.school1.web")}</p>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                      >
                        <FaCode  className="!w-4 !h-4"/>
                        <p className="text-xs font-bold">{t("aboutpage.information.education.school1.programming")}</p>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                      >
                        <TbBinaryTreeFilled className="!w-4 !h-4"/>
                        <p className="text-xs font-bold">{t("aboutpage.information.education.school1.datastructure")}</p>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-2 border-2 !border-black dark:!border-white px-3 py-2 md:px-3 md:py-2 text-black dark:text-white hover:!shadow-[0_0_5px_rgba(0,0,0,0.3)] hover:!bg-black/10 dark:hover:!shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:hover:!bg-white/20 transition-all duration-300 ease-in-out"
                      >
                        <BiMath className="!w-4 !h-4"/>
                        <p className="text-xs font-bold">{t("aboutpage.information.education.school1.math")}</p>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kanan */}
              <div className="flex flex-col gap-6 w-full lg:w-1/3 justify-between break-all">
                <div className="w-full p-6 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400/30 shadow-lg shadow-cyan-500/10 backdrop-blur-xl border-3 rounded-md flex flex-col gap-2 justify-center items-center">
                  <FaMedal size={40}/>
                  <h1 className="text-xl font-bold">{t("aboutpage.information.education.school1.gpa")}</h1>
                  <h1 className="font-extrabold text-3xl">3.84 / 4.00</h1>
                </div>
                <div className="w-full p-6 bg-yellow-500/20 border border-yellow-400/30 shadow-yellow-500/10 border-3 backdrop-blur-xl rounded-md flex flex-col gap-2 justify-center items-center">
                  <FaUserGraduate size={40}/>
                  <h1 className="text-xl font-bold">{t("aboutpage.information.education.school1.status")}</h1>
                  <h1 className="font-bold text-lg text-center">{t("aboutpage.information.education.school1.graduation")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div> 
  )
}

export default Education