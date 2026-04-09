import { useThemeStore } from "@/stores/ThemeStore";
import { useEffect, type ReactNode } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps){
    const { theme } = useThemeStore();

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme]);

    return <>{children}</>
}