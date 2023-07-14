import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export enum VerifiedStatus {
  Verified,
  Rejected,
  Pending,
}

export type StoreType = {
  name: string;
  email: string;
  frontImg: string;
  backImg: string;
  photoImg: string;
  signatureImg: string;
  verifiedStatus: VerifiedStatus;
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
        verifiedStatus: VerifiedStatus.Pending,
      }),
      {
        name: "data",
      }
    )
  )
);
