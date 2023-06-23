"use server";

import { setTimeout } from "timers/promises";
import { StoreType } from "../hooks/useStore";
import { redirect } from "next/navigation";

export default async function validate(store: StoreType) {
  setTimeout(2000);
  redirect("/valid");
}
