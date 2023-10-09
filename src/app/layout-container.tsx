"use client";

import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link as LinkChakraUI,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Link from "next/link";
import { MobileNav, SidebarContent } from "./sidebar";

interface LinkItemProps {
  name: string;
  url: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function LayoutContainer({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
