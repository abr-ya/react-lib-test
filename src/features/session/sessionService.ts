import axios from "axios";

import { IAuthPayload } from "./models";

export const postAuthRequest = async (body: IAuthPayload) => {
  const { data, status } = await axios.post("/auth", body);

  // error handler in reducer now
  return { data, status };
};
