"use client";

import { Post } from "@/model/post";
import { media } from "@/utils/media";
import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  post: Post;
}
const RenderPost: FC<Props> = ({ post }) => {
  return (
    <>
      <Box py={4} color={"gray.600"} fontSize={"lg"}>
        <Image
          width={600}
          src={media(post.attributes.thumbnail.data.attributes.url)}
        />
        <Box mt={4}>
          <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
        </Box>
      </Box>
    </>
  );
};

export default RenderPost;
