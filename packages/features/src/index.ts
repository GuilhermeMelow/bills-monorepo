import axios from "axios";

export async function callMe() {
  axios.get("https://google.com");

  return "aaaa";
}
