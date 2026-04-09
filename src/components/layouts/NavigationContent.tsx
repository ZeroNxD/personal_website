import { useNavbarStore } from "@/stores/NavbarStore";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavigationContent = () => {
    const navItems = [
        { key: "about", path: "about" },
        { key: "project", path: "projects" },
        { key: "certificate", path: "certificates" },
        { key: "contact", path: "contact" }
    ];
    const { close } = useNavbarStore();
    const { t } = useTranslation();
  return (
    <ul className="flex flex-col md:flex-row md:gap-14">
        {navItems.map((item) => (
            <li key={item.key} className="w-full text-center border-b-3 border-black/60 dark:border-white/60 md:border-none md:text-left">
                <NavLink 
                    to={`/${item.path}`} 
                    onClick={close}
                    className={({ isActive }) => 
                        `block py-6 md:py-4 lg:py-0 text-md font-bold transition-colors duration-500 ease-in-out
                        ${isActive ? "underline underline-offset-4 decoration-2 text-black dark:text-white" : "hover:text-gray-500 dark:hover:text-gray-400"}`
                    }
                >
                    {t(`navbar.${item.key}`)}
                </NavLink>
            </li>
        ))}
    </ul>
  )
}

export default NavigationContent