import { RiCustomerService2Fill } from "react-icons/ri";
import { FaSmileBeam } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";
import CTA from "./components/CTA";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div  data-aos="fade-left" data-aos-duration="2000" className="flex flex-col gap-8 items-center">
        <RiCustomerService2Fill className="text-5xl md:text-6xl lg:text-7xl"/>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">{t("contactpage.jumbotron")}</h1>

          <div className="flex flex-row items-center gap-4">
            <div className="hidden md:flex flex-row gap-2">
              <FaHandPeace className="text-yellow-300 scale-x-[-1]"/>
              <FaSmileBeam className="text-yellow-300"/>
            </div>
            <h1 className="text-base lg:text-xl font-semibold text-gray-700 dark:text-gray-300 text-center">{t("contactpage.description")}</h1>
            <div className="hidden md:flex flex-row gap-2">
              <FaSmileBeam className="text-yellow-300"/>
              <FaHandPeace className="text-yellow-300"/>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl">
          <CTA />
        </div>
    </div>
  )
}

export default ContactPage