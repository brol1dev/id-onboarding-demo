"use server";

import { setTimeout } from "timers/promises";
import { StoreType } from "../hooks/useStore";
import { redirect } from "next/navigation";

export default async function validate(store: StoreType) {
  if (process.env.NODE_ENV === "development") {
    setTimeout(2000);
  } else if (process.env.NODE_ENV === "production") {
    const res = await fetch("/api/python");
    console.log(res);
    const json = await res.json();
    console.log(json);
  }

  
  
  
  // const json = await res.json();
  // console.log(json);
  redirect("/valid");
}
