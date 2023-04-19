import { atom } from "recoil";
import { v1 } from "uuid";

export type CommunityParam = {
  keyword: string | undefined;
  type: string | undefined;
  page: number;
};
export const communityParamsState = atom<CommunityParam>({
  key: `communityParamsState/${v1()}`,
  default: {
    keyword: undefined,
    type: undefined,
    page: 1,
  },
});
