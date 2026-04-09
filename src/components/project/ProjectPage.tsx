import { useTranslation } from "react-i18next"
import ProjectList from "./components/ProjectList"

const ProjectPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-12 items-center">
        <h1 className="font-bold text-3xl text-center">{t("projectpage.jumbotron")}</h1>
        <div className="w-full max-w-6xl">
          <ProjectList />
        </div>
    </div>
  )
}

export default ProjectPage