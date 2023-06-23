"use server";

import { setTimeout } from "timers/promises";
import { StoreType } from "../hooks/useStore";
import { redirect } from "next/navigation";

export default async function validate(store: StoreType) {
  const res = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ test: "test" }),
  });

  if (!res.ok) {
    console.log("failure");
  } else {
    console.log("success");
  }

  redirect("/valid");
}
