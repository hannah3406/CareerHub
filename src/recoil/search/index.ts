import { atom } from "recoil";

export const searchState = atom<string | undefined>({
  key: "searchState",
  default: undefined,
});
