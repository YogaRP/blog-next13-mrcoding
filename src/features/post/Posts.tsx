import { memo } from "react";
import PostItem from "./PostItem";
import { getPosts } from "@/services/posts.service";

const Posts = async () => {
  const { data } = await getPosts();
  return (
    <>
      <div>
        {data.map((post, i) => (
          <PostItem post={post} key={i} />
        ))}
      </div>
    </>
  );
};

export default memo(Posts);
