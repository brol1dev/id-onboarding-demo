import { create } from "zustand";

type StoreType = {
  email: string;
  documentImg: string;
  photoImg: string;
  signatureImg: string;
};

export const useStore = create<StoreType>((set) => ({
  email: "",
  documentImg: "",
  photoImg: "",
  signatureImg: "",
}));
