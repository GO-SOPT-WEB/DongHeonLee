import create from "zustand"; // create로 zustand를 불러옵니다.

const myStore = create((set) => ({
  area: "",
  setArea: (input) => {
    set({ area: input });
  },
  result: {},
  setResult: (input) => {
    set({ result: input });
  },
}));

export default myStore;
