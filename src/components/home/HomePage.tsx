import Jumbotron from "./components/Jumbotron"
import Photo from "./components/Photo"

export const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <div className="hidden md:flex flex-row px-25 justify-between items-center">
          <div data-aos="fade-right" data-aos-duration="2000">
            <Jumbotron />
          </div>

          <div data-aos="fade-left" data-aos-duration="2000">
            <Photo />
          </div>
            
        </div>

        <div className="flex md:hidden flex flex-col gap-8 justify-between items-center">          
          <div data-aos="zoom-in" data-aos-duration="2000">
            <Photo />
          </div>
            
          <div data-aos="fade-right" data-aos-duration="2000">
            <Jumbotron />
          </div>
        </div>
      </div>
    </>
  )
}
