import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SiteLanguage = "en" | "ar";

type LanguageContextValue = {
  language: SiteLanguage;
  isArabic: boolean;
  setLanguage: (language: SiteLanguage) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const storageKey = "mg-law-language";

function applyDocumentLanguage(language: SiteLanguage) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: SiteLanguage;
}) {
  const [language, setLanguageState] = useState<SiteLanguage>(initialLanguage);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey);
    if (savedLanguage === "ar") {
      setLanguageState("ar");
      applyDocumentLanguage("ar");
      document.cookie = `${storageKey}=ar; path=/; max-age=31536000; samesite=lax`;
    }
  }, []);

  const setLanguage = (nextLanguage: SiteLanguage) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
    document.cookie = `${storageKey}=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
    applyDocumentLanguage(nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      isArabic: language === "ar",
      setLanguage,
      toggleLanguage: () => setLanguage(language === "ar" ? "en" : "ar"),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
