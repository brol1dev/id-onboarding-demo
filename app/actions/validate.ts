"use server";

import { setTimeout } from "timers/promises";
import { StoreType } from "../hooks/useStore";
import { redirect } from "next/navigation";

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://127.0.0.1:8081";
};

export default async function validate(store: StoreType) {
  if (process.env.NODE_ENV === "development") {
    setTimeout(2000);
  } else {
    const res = await fetch(`${getBaseUrl()}/api/python`);
    const json = await res.json();
    console.log("[Server action] validate: ", json);
  }

  redirect("/valid");
}
