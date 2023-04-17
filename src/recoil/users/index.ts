import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export type Tuser =
  | {
      email: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      _id: string;
      profileimg: number;
    }
  | undefined;

export const userProfileState = atom<Tuser>({
  key: "userProfileState",
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
