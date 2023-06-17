import { create } from "zustand";

type StoreType = {
  email: string;
  frontImg: string;
  backImg: string;
  photoImg: string;
  signatureImg: string;
};

export const useStore = create<StoreType>((set) => ({
  email: "",
  frontImg: "",
  backImg: "",
  photoImg: "",
  signatureImg: "",
}));
