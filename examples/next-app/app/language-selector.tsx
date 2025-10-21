"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { extract_languages_from_config } from "@nuclenergy/t";
import config, { Language } from "@/t.config";

const languages = extract_languages_from_config(config);

export default function LanguageSelector() {
  const searchParams = useSearchParams();

  let currentLang = searchParams.get("lang") as Language;

  if (!languages.includes(currentLang)) {
    currentLang = languages[0];
  }

  // Returns the current searchParams with new lang value
  function makeLangSearchParams(lang: string): string {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    return `?${params.toString()}`;
  }

  return (
    <div className="flex gap-4 items-center p-4 rounded-xl bg-gray-50 shadow-sm dark:bg-slate-800">
      {/* Prev button */}
      <Link
        href={makeLangSearchParams(
          languages[
            currentLang
              ? (languages.indexOf(currentLang) - 1 + languages.length) %
                languages.length
              : languages.length - 1
          ]
        )}
        scroll={false}
        aria-label="Previous language"
      >
        <button
          className={`px-3 py-1 rounded-full border focus:outline-none transition-all duration-200
            bg-white text-gray-800 border-gray-300 hover:bg-gray-200
            dark:bg-slate-700 dark:text-gray-100 dark:border-slate-500 dark:hover:bg-slate-600
            shadow-sm
          `}
        >
          &lt;
        </button>
      </Link>

      {/* Language buttons */}
      <div className="flex gap-2">
        {languages.map((lang) => (
          <Link key={lang} href={makeLangSearchParams(lang)} scroll={false}>
            <button
              className={`px-4 py-1 rounded-full border font-medium shadow-md focus:outline-none transition-all duration-200
                ${
                  currentLang === lang
                    ? "bg-blue-600 text-white border-blue-800 ring-2 ring-blue-300 dark:bg-blue-500 dark:text-white dark:border-blue-400 dark:ring-blue-600"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-100 dark:border-slate-500 dark:hover:bg-slate-600"
                }
              `}
              aria-current={currentLang === lang}
            >
              {lang}
            </button>
          </Link>
        ))}
      </div>

      {/* Next button */}
      <Link
        href={makeLangSearchParams(
          languages[
            currentLang
              ? (languages.indexOf(currentLang) + 1) % languages.length
              : 0
          ]
        )}
        scroll={false}
        aria-label="Next language"
      >
        <button
          className={`px-3 py-1 rounded-full border focus:outline-none transition-all duration-200
            bg-white text-gray-800 border-gray-300 hover:bg-gray-200
            dark:bg-slate-700 dark:text-gray-100 dark:border-slate-500 dark:hover:bg-slate-600
            shadow-sm
          `}
        >
          &gt;
        </button>
      </Link>
    </div>
  );
}
