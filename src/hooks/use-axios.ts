import axios from "axios";

export function useAxios() {
  const instance = axios.create({
    baseURL: "https://www.reddit.com/r/",
  });

  return instance;
}

///minecraft/new.json
