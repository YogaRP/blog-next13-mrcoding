"use client";

import { Post } from "@/model/post";
import { media } from "@/utils/media";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  post: Post;
}
const PostItem: FC<Props> = ({ post }) => {
  return (
    <Card my={8} overflow={"hidden"} direction={{ base: "column", sm: "row" }}>
      <Image
        maxW={{ base: "100%", sm: "200px" }}
        objectFit="cover"
        src={media(post.attributes.thumbnail.data.attributes.url)}
      />
      <Link href={`/post/${post.attributes.slug}`}>
        <CardBody>
          <Text fontWeight={"bold"} fontSize={"lg"} color={"gray.600"}>
            {post.attributes.title}
          </Text>
          <Text fontSize={"md"} color={"gray.600"}>
            {post.attributes.short_description}
          </Text>
        </CardBody>
      </Link>
    </Card>
  );
};

export default PostItem;
