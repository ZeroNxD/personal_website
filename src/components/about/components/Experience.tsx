import { useThemeStore } from "@/stores/ThemeStore";
import { useTranslation } from "react-i18next";
import { FaCalendarDays } from "react-icons/fa6";

const Experience = () => {
  const { theme } = useThemeStore();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-12 items-center">
      <h1 data-aos="fade-right" data-aos-duration="1500" className="font-bebas tracking-widest text-4xl md:text-5xl text-center">{t("aboutpage.information.experience.jumbotron")}</h1>
      <div  className="relative gap-15 w-full">
        <div className="absolute left-2.5 lg:left-5 top-0 bottom-0 w-[2px] bg-black/80 dark:bg-white/80"></div>
        <div className="flex flex-col gap-15">
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 w-full">
            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-black/80 dark:border-white/80 bg-cyan-500/70 backdrop-blur-xl flex-shrink-0 self-center"></div>
            <div data-aos="zoom-in" data-aos-duration="1500" className="flex flex-col gap-8 border-2 border-black dark:border-white p-4 md:p-6 lg:p-8 rounded-lg w-full break-words">
              <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0 justify-between min-w-0">
                <div className="flex flex-row gap-4">
                    <div className="aspect-square w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/70 dark:bg-white/30 p-3 rounded-xl">
                      <img src={`/icons/${theme}/inti-logo.png`} alt="" className="w-full h-full" loading="lazy"/>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-0 justify-between">
                      <h1 className="font-bebas tracking-widest lg:tracking-widest text-lg lg:text-3xl">PT Indotama Teknologi Inovasi</h1>
                      <h1 className="text-sm lg:text-lg font-semibold">{t("aboutpage.information.experience.experience1.job")}</h1>
                    </div>
                </div>
                <div className="bg-gray-500/30 dark:bg-gray-200/30 h-fit p-2 px-3 lg:px-6 text-sm rounded-full ">
                  <div className="flex flex-row gap-2 items-center justify-center text-xs lg:text-sm">
                    <FaCalendarDays />
                    <h1 className="font-semibold">FEB 2025 - FEB 2026</h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                  <ul className="list-disc pl-5 text-xs lg:text-sm">
                    <li>{t("aboutpage.information.experience.experience1.contribution.1")}</li>
                    <li>{t("aboutpage.information.experience.experience1.contribution.2")}</li>
                    <li>{t("aboutpage.information.experience.experience1.contribution.3")}</li>
                    <li>{t("aboutpage.information.experience.experience1.contribution.4")}</li>
                  </ul>
              </div>
            </div>
          </div>

          {/* Kalau mau nambahin experience disini */}
        </div>
      </div>
    </div>
  )
}

export default Experience