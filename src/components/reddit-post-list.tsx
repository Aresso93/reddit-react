import { Post } from "../model/reddit-post";
import RedditPostCard from "./reddit-post-card";

interface PostListProps {
  posts: Post[];
}

export default function RedditPostList(props: PostListProps) {
  return (
    <>
      <RedditPostCard />
    </>
  );
}
