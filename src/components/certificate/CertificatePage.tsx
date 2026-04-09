import { useTranslation } from "react-i18next"
import CertificateList from "./components/CertificateList"

const CertificatePage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-12 items-center">
        <h1 className="font-bold text-3xl text-center">{t("certificatepage.jumbotron")}</h1>
        <div className="w-full max-w-6xl">
          <CertificateList />
        </div>
    </div>
  )
}

export default CertificatePage