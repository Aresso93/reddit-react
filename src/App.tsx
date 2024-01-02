import { useEffect } from "react";
import "./App.css";
import { useRedditApi } from "./hooks/reddit-api";
import RedditPostList from "./components/reddit-post-list";
import PostCard from "./components/reddit-post-card";

function App() {
  const reddit = useRedditApi();

  useEffect(() => {
    reddit.actions.getSubredditData();
  }, []);

  //console.log(reddit.states.data);

  return (
    <>
      <RedditPostList posts={reddit.states.data} />
      {/* <PostCard
        title={"sss"}
        author={"ffff"}
        id={"ggg"}
        selftext={"oooooooos"}
        ups={440}
        downs={20}
      ></PostCard> */}
    </>
  );
}

export default App;
