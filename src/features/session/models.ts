export interface ISessionState {
  auth: IAuth;
  isAdmin: boolean | null;
  token: string | null;
  user: IUser;
}

export type Token = string;

export interface IAuth {
  data: { access_token: string };
  error: string | null;
  isFetching: boolean;
}

const defaultAuth: IAuth = {
  data: { access_token: "" },
  error: null,
  isFetching: false,
};

export type Site = {
  code: string;
  name: string;
  timeZone: number;
};
interface IUser {
  currentSite?: Site | null;
}

const defaultUser: IUser = {
  currentSite: {
    code: "",
    name: "",
    timeZone: 3,
  },
};

export const defaultSession: ISessionState = {
  auth: defaultAuth,
  isAdmin: true,
  token: null,
  user: defaultUser,
};

export interface IAuthPayload {
  login: string;
  password: string;
}
