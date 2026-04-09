import Biodata from "./Biodata"
import Education from "./Education"
import Experience from "./Experience"
import Techstack from "./Techstack"

const Information = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center max-w-full">
        <div className="w-full max-w-6xl px-1 md:px-10 flex flex-col gap-16">
          <Biodata />
          <Techstack />
          <Education />
          <Experience />
        </div>
    </div>
  )
}

export default Information