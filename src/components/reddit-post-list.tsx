import { Post } from "../model/reddit-post";
import PostCard from "./reddit-post-card";
import RedditPostCard from "./reddit-post-card";

interface PostListProps {
  posts: Post[];
}

export default function RedditPostList(props: PostListProps) {
  return (
    <>
      {props.posts.map((post: Post) => {
        <PostCard
          title={post.title}
          author={post.author}
          id={post.id}
          selftext={post.selftext}
          ups={post.ups}
          downs={post.downs}
        />;
      })}
    </>
  );
}
