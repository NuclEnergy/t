import { createT } from "@nuclenergy/t/react";
import { Language } from "@/t.config";
import { _t } from "./_t";
import LanguageSelector from "./language-selector";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang: Language }>;
}) {
  const { lang = "en" } = await searchParams;
  const t = createT(_t[lang]);

  return (
    <main>
      <div className="flex flex-col gap-4 items-center m-8 text-xl">
        <div>
          <p>
            {t(
              "I have a dream that one day this nation will rise up and live out the true meaning of its creed:"
            )}
          </p>
          <p>
            {t(
              "“We hold these truths to be self-evident, that all men are created equal.”"
            )}
          </p>
        </div>
        <div>
          <p>
            {t(
              "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."
            )}
          </p>
        </div>
        <div>
          <p>{t("I have a dream today.")}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <LanguageSelector />
      </div>
    </main>
  );
}
