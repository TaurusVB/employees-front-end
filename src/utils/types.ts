export type ErrorMessage = {
  status: number;
  data: {
    message: string;
  };
};

export type User = {
  id: string;
  password: string;
  email: string;
  name: string;
};

export type ErrorWithMessage = {
  status: number;
  data: {
    message: string;
  };
};
