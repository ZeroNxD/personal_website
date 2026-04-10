import BlurText from "../BlurText"
import Photo from "../home/components/Photo"
import { TiArrowSortedDown } from "react-icons/ti";
import Information from "./components/Information";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div data-aos="zoom-in" data-aos-duration="2000">
        <Photo />
      </div>
            
      <BlurText
        text={t("aboutpage.mainpage.glimpse")}
        delay={200}
        animateBy="words"
        direction="top"
        className="text-lg md:text-2xl lg:text-4xl font-bold justify-center"
      />
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center w-full gap-4">
          <div className="flex-1 h-px bg-gray-800 dark:bg-gray-500"></div>
          <span className="text-sm md:text-base text-gray-700 dark:text-gray-400 whitespace-nowrap">
            {t("aboutpage.mainpage.scrolldown")}
          </span>
          <div className="flex-1 h-px bg-gray-800 dark:bg-gray-500"></div>
        </div>

        <div className="flex justify-center text-gray-700 dark:text-gray-400 animate-bounce">
          <TiArrowSortedDown size="22"/>
        </div>
      </div>

      <div className="w-full border-2 rounded-lg bg-gradient-to-b from-gray-200/70 to-gray-300/70 dark:from-slate-800/70 dark:to-slate-900/70 border-gray-500 p-6 md:p-8 lg:p-10">
        <Information />
      </div>
    </div>
  )
}
