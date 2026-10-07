import { useTranslation } from "react-i18next";

const ITFlag = () => (
    <svg viewBox="0 0 3 2" className="h-4 w-6 rounded-[2px]">
        <rect width="1" height="2" fill="#009246" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#ce2b37" />
    </svg>
);

const USFlag = () => (
    <svg viewBox="0 0 28 14" className="h-4 w-6 rounded-[2px]">
        <rect width="28" height="14" fill="#fff" />
        {[ 0, 4, 8, 12 ].map((y) => (
            <rect key={y} y={y} width="28" height="2" fill="#b22234" />
        ))}
        <rect width="12" height="8" fill="#3c3b6e" />
    </svg>
);

const langs = [
    { code: "en", label: "English", Flag: USFlag },
    { code: "it", label: "Italiano", Flag: ITFlag },
] as const;

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center gap-2">
            {langs.map(({ code, label, Flag }) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => i18n.changeLanguage(code)}
                    aria-label={label}
                    title={label}
                    className={`p-1 rounded transition-all ${i18n.language === code
                            ? "ring-2 ring-orange-400 opacity-100"
                            : "opacity-50 hover:opacity-100"
                        }`}
                >
                    <Flag />
                </button>
            ))}
        </div>
    );
}