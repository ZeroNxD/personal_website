import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import NavigationContent from "./NavigationContent";
import SettingButton from "./SettingButton";
import { IoClose, IoMenu } from "react-icons/io5";
import { useThemeStore } from "@/stores/ThemeStore";
import { useNavbarStore } from "@/stores/NavbarStore";

const Navbar = () => {
    const { isOpen, toggle, close } = useNavbarStore();
    const  {theme } = useThemeStore();

    return (
        <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#989b9c]/35 md:bg-[#989b9c]/30 lg:bg-[#989b9c]/20 dark:bg-black/80 dark:md:bg-black/70 dark:lg:bg-black/50 font-roboto text-black dark:text-white z-50 inset-x-0 h-fit">
            <div className="py-6 px-6 md:px-12 lg:px-30 mb-0 flex justify-between w-full items-center">
                <div className="flex flex-row gap-4 justify-start items-center">
                    <Link to={"/"} onClick={close} className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-black dark:bg-white flex justify-center">
                            <img src={`/icons/${theme}/KP.png`} className="h-13 w-auto object-contain" loading="lazy"/>
                        </div>
                        <h1 className="hidden lg:block font-bebas text-xl tracking-widest">Kevin Petersen</h1>   
                    </Link>
                </div>

                <div className="hidden md:flex flex-row gap-4 items-center justify-end">
                    <NavigationContent />
                    <Separator orientation="vertical" className="!bg-black dark:!bg-white !mx-6 !h-8 !w-[2px] self-center" />
                    <SettingButton />
                </div>
                
                <div className="flex md:hidden flex-row items-center justify-end">
                    <SettingButton />
                    <Separator orientation="vertical" className="bg-black dark:!bg-white !mx-6 !h-8 !w-[2px] self-center" />
                    <button className="md:hidden" onClick={toggle}>
                        {isOpen ? <IoClose size="28"/> : <IoMenu size="28"/>}
                    </button> 
                </div>  
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full h-screen md:hidden flex flex-col gap-6 px-6 !backdrop-blur-md bg-[#d8dada]/95 dark:bg-black/95 z-50">
                    <NavigationContent />
                </div>
            )}
        </div>     
  )
}

export default Navbar