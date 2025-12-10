import { create } from "zustand";

export const useCounter = create((set) => ({
    cnt: 0,
    inc: () => set((state) => ({ cnt: state.cnt + 1 })),
    dec: () => set((state) => ({ cnt: state.cnt - 1 })),
    reset: () => set({ cnt: 0 })
}))