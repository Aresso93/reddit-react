import { useState } from "react";
import { useAxios } from "./use-axios";

export function useRedditApi() {
  const axiosService = useAxios();
  const [data, setData] = useState([]);

  async function getSubredditData(subreddit: string) {
    const response = await axiosService(subreddit + "/new.json");
    console.log(response.data.data.children);

    setData(response.data.data.children);
  }

  return {
    actions: {
      getSubredditData,
    },
    states: {
      data,
    },
  };
}
