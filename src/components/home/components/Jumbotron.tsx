import { useTranslation } from "react-i18next";
import TextType from "../../TextType"
import ListButton from "./ListButton"

const Jumbotron = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 md:gap-6 lg:gap-8 max-w-xl items-center lg:items-start">
        <TextType 
            text={["Hello All", "Halo Semua", "大家好。", "皆さん、こんにちは。"]}
            typingSpeed={100}
            pauseDuration={2000}
            showCursor
            cursorCharacter="_"
            deletingSpeed={75}
            cursorBlinkDuration={0.1}
            className="font-bebas tracking-wider md:tracking-widest text-2xl md:text-4xl lg:text-5xl"
        />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-roboto font-bold">{t("homepage.jumbotron.introduction")}</h1>
        
        <h1 className="text-base lg:text-lg font-roboto font-semibold text-center lg:text-left">
            {t("homepage.jumbotron.description")}
        </h1>

        <div className="flex items-stretch gap-3">
          <div className="w-[2px] bg-gray-800 dark:bg-gray-300 flex-shrink-0"></div>
          <p className="text-sm md:text-base italic text-gray-800 dark:text-gray-300 pb-1">
            {t("homepage.jumbotron.quotes")}          
          </p>
        </div>

        <ListButton />
    </div>
  )
}

export default Jumbotron