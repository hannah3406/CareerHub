export type CreateUser = {
  email: string;
  password: string;
  name: string;
};

export type LoginResult = {
  token: string;
};
export type userProfile = {
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
};
