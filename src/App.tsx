import { useEffect } from "react";
import "./App.css";
import { useRedditApi } from "./hooks/reddit-api";

function App() {
  const reddit = useRedditApi();
  useEffect(() => {
    reddit.actions.getSubredditData("minecraft");
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
