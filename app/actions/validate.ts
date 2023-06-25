"use server";

import { StoreType } from "../hooks/useStore";
import { redirect } from "next/navigation";
import { ValidateResponse } from "../types";


const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return "https://id-onboarding-demo-api.onrender.com";
  return "http://127.0.0.1:8081";
};

export default async function validate(store: StoreType) {
  let res;
  try {
  res = await fetch(`${getBaseUrl()}/api/validate`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(store),
  });
  } catch (e) {
    console.error("error with /api/validate request. ", e);
    redirect("/invalid");
  }

  if (!res || !res.ok) {
    console.error("[Server action | Validate] The response is invalid");
    redirect("/invalid");
  }

  const json = (await res.json()) as ValidateResponse;
  console.log("[Server action | Validate] validate response: ", json);

  if (!json.valid) {
    redirect("/invalid");
  }
  redirect("/valid");
}
