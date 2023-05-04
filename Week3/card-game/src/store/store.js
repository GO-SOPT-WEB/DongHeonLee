import create from "zustand";

const useStore = create((set) => ({
  isFlipped: 0,
  flipCard: () =>
    set((state) => ({
      isFlipped: isFlipped === 0 ? state.isFlipped + 1 : state.isFlipped - 1,
    })),
  isCorrected: 0,
  correctCard: () =>
    set((state) => ({
      isCorrected:
        isCorrected === 0 ? state.isCorrected + 1 : state.isCorrected - 1,
    })),
}));

export default useStore;
