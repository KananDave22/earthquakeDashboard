import { create } from "zustand";

export const useStore = create((set) => ({
  selectedId: null,
  xAxis: "mag",
  yAxis: "depth",

  setSelectedId: (id) => set({ selectedId: id }),

  setAxis: (x, y) => set({
    xAxis: x,
    yAxis: y,
  }),
}));