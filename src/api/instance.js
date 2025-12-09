import axios from "axios";

const publicApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default publicApi;


async function login() {
  try {
    const response = await publicApi.post("/login", {
      username: "ThanksToApple",
      password: "qwer1234",
    });
    console.log(response.data);
  } catch (error) {
    console.log(error)
  }
}

login();