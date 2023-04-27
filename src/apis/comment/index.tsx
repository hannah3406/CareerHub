import instance from "apis/_axios/instance";
import { AxiosInstance } from "axios";

import { BoardCommentList, CreateComment } from "./type";

export class CommentApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  createComment = async (commentData: CreateComment): Promise<{}> => {
    const { data } = await instance({
      method: "POST",
      url: `community/comments/create`,
      data: commentData,
    });
    return data;
  };

  getCommentById = async (boardId: string): Promise<BoardCommentList[]> => {
    const { data } = await instance({
      method: "GET",
      url: `/comments/${boardId}`,
    });
    return data;
  };
}

const commentApi = new CommentApi();

export default commentApi;
