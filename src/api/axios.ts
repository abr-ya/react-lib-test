import axios from "axios";
import { getToken } from "./tokenHelper";
import { postAuth } from "src/features/session/sessionSlice";
import { store } from "src/app/store";

axios.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async (config) => {
    const token = getToken(); // token from LS!
    if (!token) return config;

    return {
      ...config,
      headers: {
        ...config.headers,
        "Tsars-Authorization": `Bearer ${token}`,
      },
    };
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => {
    const statusCode = response.status;
    if (statusCode === 260) {
      const message = response.data?.message;
      if (typeof message === "string") {
        console.log(message);
        // Notification.success(message, { autoClose: 5000 });
      } else {
        console.log(`Ожидали message строкой, а получили ${typeof message}`);
      }
    }

    return response;
  },
  (err) => {
    // Any HTTP Code which is not 2xx will be considered as error
    const originalConfig = err.config;
    const statusCode = err.response.status;
    if (statusCode === 401) {
      console.log(401);
      store.dispatch(postAuth());

      setTimeout(() => {
        return axios(originalConfig);
      }, 200);
    }
    if (statusCode === 403) {
      console.log(403);
    }

    throw err;
  },
);

export default axios;
