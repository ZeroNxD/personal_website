import { create } from "zustand";
import i18n from "@/utils/i18n";

type Language = "id" | "en";

interface LanguageState {
    language: Language;
    toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
    language: (i18n.language.split("-")[0] as Language) || "en",
    toggleLanguage: () => {
        set((state) => {
            const newLanguage = state.language === "id" ? "en" : "id";
            i18n.changeLanguage(newLanguage);
            return { language: newLanguage };
        })
    }
}))