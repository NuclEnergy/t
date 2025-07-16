"use client";

import { createT } from "@nuclenergy/t/react";
import { Dict } from "./_t";

export const ClientSide = ({ dict }: { dict: Dict }) => {
  const t = createT(dict);

  return <div>{t("Good morning")}</div>;
};
