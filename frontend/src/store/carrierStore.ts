import { create } from "zustand";

type CarrierStore = {
  isEmpty: boolean;
  carrierType: string;
  setCarrierType: (type: string) => void;
  setIsEmpty: (value: boolean) => void;
};


export const useCarrierStore = create<CarrierStore>((set) => ({
  isEmpty: true,
  carrierType: '',
  setCarrierType: (type: string) =>
  set(() => ({
    carrierType: type, 
  })),
  setIsEmpty: (value) => set({ isEmpty: value }),
}))


