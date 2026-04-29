import { useState } from "react";
import { Button } from "../ui/button"
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useThemeStore } from "@/stores/ThemeStore";
import { useLanguageStore } from "@/stores/LanguageStore";

const SettingButton = () => {
    const { toggleTheme, theme, isDark } = useThemeStore();
    const [click, setClick] = useState<boolean>(false);
    const { language , toggleLanguage } = useLanguageStore();

    const handleToggle = () => {
        setClick(true);
        toggleTheme();
        setTimeout(() => {
            setClick(false);
        }, 400)
    }

    return (
        <div className="flex flex-row gap-6 justify-center">
            <Button variant="ghost" onClick={toggleLanguage} className="relative rounded-full overflow-hidden w-8 h-8 p-0 cursor-pointer">
                <img src={`${language === "id" ? "/images/Indo.png" : "/images/English.png"}`} loading="lazy" className="w-full h-full object-cover transition-all duration-300 ease-in-out" />
                <div className="absolute inset-0 b-black/0 transition-colors duration-300 ease-in-out hover:bg-black/10"/>
            </Button>

            <Button
                variant="ghost"
                onClick={handleToggle}
                className={`
                    relative overflow-hidden rounded-full w-8 h-8 p-0
                    flex items-center justify-center
                    transition-color duration-300 ease-in-out cursor-pointer
                    
                    ${theme === "dark"
                        ? "bg-[#09b4d6]"
                        : "bg-gray-200"}

                    before:absolute before:inset-0
                    before:rounded-full
                    before:scale-0
                    before:origin-center
                    before:transition-all before:duration-300
                    hover:before:scale-100
                    ${theme === "dark"
                        ? "before:bg-[#078aa5]" 
                        : "before:bg-gray-500/50"}

                    after:absolute after:inset-0
                    after:rounded-full
                    after:opacity-0
                    after:transition-all after:duration-300
                    hover:after:opacity-100
                    ${theme === "dark"
                        ? "after:bg-[#0fd8ff]/30"
                        : "after:bg-white/40"}
                    `}
                >
                <span className="relative z-10">
                    {isDark ? (
                        <IoMdMoon
                            size={18}
                            className={`text-white ${click ? "animate-[spin_0.5s_linear_1]" : ""}`}
                        />
                    ) : (
                        <IoMdSunny
                            size={18}
                            className={`text-yellow-500 ${click ? "animate-[spin_0.5s_linear_1]" : ""}`}
                        />
                    )}
                </span>
            </Button>
        </div>
    )
}

export default SettingButton