import { Box, useColorModeValue } from "@chakra-ui/react";

const NavLink: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const bgHover = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: bgHover,
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default NavLink;
