import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
    theme: Theme;
    isLight: boolean;
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const getSystemTheme = (): Theme => {
    if(typeof window !== "undefined"){
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
};

export const useThemeStore = create<ThemeState>((set) => {
    const storedTheme = (localStorage.getItem("ui-theme") as Theme) || getSystemTheme();

    return {
        theme: storedTheme,
        isLight: storedTheme === "light",
        isDark: storedTheme === "dark",
        toggleTheme: () => 
            set((state) => {
                const newTheme = state.theme === "light" ? "dark" : "light";
                localStorage.setItem("ui-theme", newTheme);
                return {
                    theme: newTheme,
                    isLight: newTheme === "light",
                    isDark: newTheme === "dark",
                };
            }),
        setTheme: (theme: Theme) => {
            localStorage.setItem("ui-theme", theme);
            set({
                theme: theme,
                isLight: theme === "light",
                isDark: theme === "dark",
            });
        },
    };
})