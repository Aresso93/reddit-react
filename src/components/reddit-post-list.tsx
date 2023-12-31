import { Post } from "../model/reddit-post";
import PostCard from "./reddit-post-card";

interface PostListProps {
  posts: Post[];
}

export default function RedditPostList(props: PostListProps) {
  return (
    <>
      {props.posts.map((post: Post) => (
        <PostCard
          title={post.data.title}
          //   author={post.data.author}
          //   id={post.data.id}
          //   ups={post.data.ups}
          //   downs={post.data.downs}
          //   thumbnail={post.data.thumbnail}
        />
      ))}
    </>
  );
}
