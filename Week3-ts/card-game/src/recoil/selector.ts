import { selector } from "recoil";
import { mainGameAtom } from "./atoms";

export const curLevelSelector = selector<string>({
  key: "curLevelSelector",
  get: ({ get }) => get(mainGameAtom).curLevel,
  set: ({ set }, newValue) => {
    set(mainGameAtom, (prev) => ({
      ...prev,
      curLevel: newValue as string,
    }));
  },
});

export const nowScoreSelector = selector<number>({
  key: "nowScoreSelector",
  get: ({ get }) => get(mainGameAtom).nowScore,
  set: ({ set }, newValue) => {
    set(mainGameAtom, (prev) => ({
      ...prev,
      nowScore: newValue as number,
    }));
  },
});
