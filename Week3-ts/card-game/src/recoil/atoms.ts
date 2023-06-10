import { atom } from "../../node_modules/recoil/index";

export interface GameState {
  curLevel: string;
  nowScore: number;
}

export const mainGameAtom = atom<GameState>({
  key: "mainGameAtom",
  default: {
    curLevel: "Easy",
    nowScore: 0,
  },
});
