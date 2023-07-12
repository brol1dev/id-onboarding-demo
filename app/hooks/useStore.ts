import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type StoreType = {
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
