import { createT } from "@nuclenergy/t";
import { Language } from "@/t.config";
import { ClientSide } from "./client_side";
import { _t } from "./_t";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang: Language }>;
}) {
  const { lang = "en" } = await searchParams;
  const t = createT(_t[lang]);

  return (
    <div>
      <h1>{t("Hello, World!")}</h1>
      <ClientSide dict={_t[lang]} />
    </div>
  );
}
