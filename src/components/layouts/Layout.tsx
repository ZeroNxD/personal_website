import { Outlet } from "react-router-dom"
import DarkVeil from "../DarkVeil"
import Navbar from "./Navbar"
import { useThemeStore } from "@/stores/ThemeStore"

const Layout = () => {
    const {isDark} = useThemeStore();
    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-black overflow-x-hidden outline-2 transition-color duration-700 ease-in-out">
            <div className={`fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-700 ease-in-out opacity-0 ${isDark ? 
                "opacity-100" : "opacity-0"
            }`}>
                <DarkVeil
                    hueShift={45}
                    noiseIntensity={0.07}
                    scanlineIntensity={0.05}
                    speed={1}
                    scanlineFrequency={0}
                    warpAmount={0.25}
                    resolutionScale={1.25}
                />
            </div>
            <Navbar />            

            <main className="relative z-10 px-6 md:px-12 lg:px-30 pt-32 md:pt-40 pb-10 text-black dark:text-white overflow-y-auto transition-all duration-700 ease-in-out">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout