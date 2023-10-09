"use client";

import { Heading } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
}
const PageTitle: FC<Props> = ({ title }) => {
  return <Heading fontSize={"2xl"}>{title}</Heading>;
};

export default PageTitle;
