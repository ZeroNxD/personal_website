import { useTranslation } from "react-i18next";
import { BsPersonWorkspace } from "react-icons/bs";

const Biodata = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 items-center">
        <h1 className="font-bebas tracking-widest text-4xl md:text-5xl">{t("aboutpage.information.biodata.header")}</h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-2 gap-0 w-full max-w-6xl">
          <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col justify-center items-center">
              <img src="/images/Profile.jpeg" className="w-100 h-auto object-cover rounded-lg" loading="lazy"/>
              <h1>NB: Foto Graduation aja</h1>
          </div>

          <div data-aos="fade-left" data-aos-duration="2000" className="flex flex-col gap-4 lg:gap-6 break-words">
            <h1 className="hidden lg:flex text-2xl font-bold">
              {t("aboutpage.information.biodata.introduction")}
            </h1>
            <div className="flex lg:hidden flex-col text-xl font-bold text-center">
              <h1>{t("aboutpage.information.biodata.intro1")}</h1>
              <h1>{t("aboutpage.information.biodata.intro2")}</h1>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base lg:text-left">
              {t("aboutpage.information.biodata.description")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base lg:text-left">
              {t("aboutpage.information.biodata.subdescription")}
            </p>

            <BsPersonWorkspace size={100} className="self-center md:self-end text-gray-700 dark:text-gray-300 md:rotate-10 md2 gap-0mt-5 md:mr-5 "/>
          </div>
      </div>
    </div>
    
  )
}

export default Biodata