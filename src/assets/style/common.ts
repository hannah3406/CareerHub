import styled from "@emotion/styled";

export const ProfileImg = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  background: #fff;
  box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.15);
  > img {
    z-index: -1;
    width: 100%;
  }
`;
export const ProfileDefaultImg = styled.div`
  width: 43px;
  height: 43px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.15);
  > img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
export const ProfileSmallImg = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: 50%;
  > img {
    width: 100%;
  }
`;
