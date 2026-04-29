import { useTranslation } from 'react-i18next';
import { Button } from '../../ui/button'
import { IoPerson } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useLanguageStore } from '@/stores/LanguageStore';

const ListButton = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  return (
    <div className="flex flex-row gap-4">
      <Link to={"/about"}>
        <Button variant="outline" size="lg" className="bg-transparent font-semibold border-2 !border-black dark:!border-white cursor-pointer hover:!bg-[#08a6a8] hover:!text-white transition-color duration-500 ease-in-out">
          <IoPerson />
          {t("homepage.jumbotron.detail")}
        </Button>
      </Link>
        
      <a href={`/pdf/${language}/Resume-Kevin Petersen.pdf`} download="CV-Kevin Petersen.pdf">
        <Button variant="outline" size="lg" className="bg-transparent font-semibold border-2 !border-black dark:!border-white cursor-pointer hover:!bg-[#08a6a8] hover:!text-white transition-color duration-500 ease-in-out">
          <MdOutlineFileDownload />
          {t("homepage.jumbotron.download")}
        </Button>
      </a>
    </div>
  )
}

export default ListButton