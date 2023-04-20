import { atom } from "recoil";
import { v1 } from "uuid";

export type SearchParam = {
  keyword: string | undefined;
  type: string | undefined;
  page?: number;
};

export const searchState = atom<string>({
  key: `searchState/${v1()}`,
  default: "",
});

export const selectTypeState = atom<string>({
  key: `selectTypeState/${v1()}`,
  default: "title",
});

export const searchParamsState = atom<SearchParam>({
  key: `searchParamsState/${v1()}`,
  default: {
    keyword: undefined,
    type: undefined,
    page: 1,
  },
});
