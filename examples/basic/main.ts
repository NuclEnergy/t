import { createT, extract_languages_from_config } from "@nuclenergy/t";
import { _t } from "./_t";
import config from "./t.config";

function main() {
  const languages = extract_languages_from_config(config);
  const t = createT(
    _t[languages[Math.floor(Math.random() * languages.length)]]
  );

  let title = document.getElementById("title");
  if (!title) {
    const h1 = document.createElement("h1");
    h1.id = "title";
    document.body.appendChild(h1);
    title = h1;
  }

  title.textContent = t("Hello, World!");
}

main();
