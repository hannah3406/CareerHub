export const setViewBoardId = (boardId: string) => {
  window.sessionStorage.setItem(boardId, "view");
};

export const getViewBoardId = (boardId: string) => {
  const isView = window.sessionStorage.getItem(boardId);
  return !!isView;
};
