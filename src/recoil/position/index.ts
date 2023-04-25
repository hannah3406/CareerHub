import { atom } from "recoil";
import { v1 } from "uuid";

export type PositionArtice = {
  title: string;
  company: string;
  positionId: string;
  url: string;
  skill?: string[];
} | null;
export const positionArticleState = atom<PositionArtice>({
  key: `positionArticleState/${v1()}`,
  default: null,
});
