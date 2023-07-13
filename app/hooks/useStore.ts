import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type StoreType = {
  name: string;
  email: string;
  frontImg: string;
  backImg: string;
  photoImg: string;
  signatureImg: string;
};

export const useStore = create<StoreType>()(
  devtools(
    persist(
      (set) => ({
        name: "",
        email: "",
        frontImg: "",
        backImg: "",
        photoImg: "",
        signatureImg: "",
      }),
      {
        name: "data",
      }
    )
  )
);
