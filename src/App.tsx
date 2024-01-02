import { useEffect } from "react";
import "./App.css";
import { useRedditApi } from "./hooks/reddit-api";
import RedditPostList from "./components/reddit-post-list";

function App() {
  const reddit = useRedditApi();
  useEffect(() => {
    reddit.actions.getSubredditData("minecraft");
  }, []);

  return (
    <>
      <RedditPostList posts={reddit.states.data} />
    </>
  );
}

export default App;
