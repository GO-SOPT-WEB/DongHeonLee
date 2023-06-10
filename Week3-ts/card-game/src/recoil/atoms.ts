import { atom } from "recoil";

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
