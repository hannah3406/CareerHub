import { atom } from "recoil";
export type Tuser =
  | {
      email: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      _id: string;
    }
  | undefined;

export const userProfileState = atom<Tuser>({
  key: "userProfileState",
  default: undefined,
});
