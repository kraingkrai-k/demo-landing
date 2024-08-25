"use client";

import {
  Flex,
  Text,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";

export const BlurWithOpacity = (props: IconProps) => {
  const widthIcon = useBreakpointValue({
    base: "100%",
    md: "40vw",
    lg: "30vw",
  });

  const zIndexIcon = useBreakpointValue({ base: -1, md: -1, lg: 0 });

  return (
    <Icon
      width={widthIcon}
      zIndex={zIndexIcon}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export const AvatarContributeGroups = () => {
  const sizeAvatar = useBreakpointValue({ base: "md", md: "lg" });

  const minMaxAvatar = useBreakpointValue({ base: "44px", md: "60px" });

  return (
    <>
      <AvatarGroup>
        {avatars.map((avatar) => (
          <Avatar
            key={avatar.name}
            name={avatar.name}
            src={avatar.url}
            size={sizeAvatar}
            position={"relative"}
            zIndex={2}
            _before={{
              content: '""',
              width: "full",
              height: "full",
              rounded: "full",
              transform: "scale(1.125)",
              bgGradient: "linear(to-bl, red.400,pink.400)",
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: 0,
            }}
          />
        ))}
      </AvatarGroup>
      <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
        +
      </Text>
      <Flex
        align={"center"}
        justify={"center"}
        fontFamily={"heading"}
        fontSize={{ base: "sm", md: "lg" }}
        bg={"gray.800"}
        color={"white"}
        rounded={"full"}
        minWidth={minMaxAvatar}
        minHeight={minMaxAvatar}
        position={"relative"}
        _before={{
          content: '""',
          width: "full",
          height: "full",
          rounded: "full",
          transform: "scale(1.125)",
          bgGradient: "linear(to-bl, orange.400,yellow.400)",
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      >
        YOU
      </Flex>
    </>
  );
};
