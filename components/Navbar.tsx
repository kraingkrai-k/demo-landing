"use client";

import { handlerSignout } from "@app/store/authSlice";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { PATH_SIGNIN } from "@app/utils/path.util";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function NavBar() {
  const router = useRouter();
  const pathName = usePathname();

  const stateAuth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const baseBg = useColorModeValue("white.100", "white.900");

  const isSignInPage = useMemo(
    () => pathName.includes(PATH_SIGNIN),
    [pathName]
  );

  const onSignOut = () => {
    dispatch(handlerSignout());
    router.push(PATH_SIGNIN, { scroll: true });
  };

  if (isSignInPage) {
    return <></>;
  }

  return (
    <Box bg={baseBg} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Logo</Box>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://api.dicebear.com/9.x/pixel-art/svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://api.dicebear.com/9.x/pixel-art/svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>

                <MenuItem onClick={onSignOut}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
