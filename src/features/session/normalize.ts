import jwtDecode from "jwt-decode";

import { IDecodedToken } from "./interfaces";

const getUserAuthorities = (token: string) => {
  if (!token) return [];

  const decodedToken: IDecodedToken = jwtDecode(token);

  return decodedToken?.authorities;
};

export const normalizeIsAdmin = (token: string): boolean => {
  const roles = getUserAuthorities(token);
  const isAdmin = roles.includes("ArchiveUser");
  console.log("isAdmin", isAdmin);

  return isAdmin;
};
