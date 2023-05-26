import React from "react";
import PageContainer from "../lib/PageContainer";
import {
  Flex,
  Link,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const navs: {
  url: string;
  text: string;
}[] = [
  {
    url: "/home",
    text: "HomePage",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/contacts",
    text: "Contacts",
  },
];
const HeaderNav = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <PageContainer>
      <Flex
        width="full"
        bg="skyblue"
        h="50px"
        alignItems="center"
        justify="space-between"
      >
        <Flex ml="10px">
          <Link as={NavLink} to="/home">
            Logo
          </Link>
        </Flex>
        {isLargerThan768 ? (
          <Flex columnGap={10} mr={20}>
            {navs.map((nav, idx) => (
              <Link
                key={idx}
                as={NavLink}
                to={nav.url}
                fontWeight="bold"
                fontSize="22px"
                textDecoration="none"
                color="white"
              >
                {nav.text}
              </Link>
            ))}
          </Flex>
        ) : (
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<RxHamburgerMenu />}
                variant="outline"
                mr="10px"
              />
              <MenuList zIndex="100">
                {navs.map((nav, idx) => (
                  <MenuItem>
                    <Link
                      fontSize="22px"
                      as={NavLink}
                      to={nav.url}
                      _hover={{ color: "blue" }}
                      textDecoration="none"
                    >
                      {nav.text}
                    </Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </PageContainer>
  );
};

export default HeaderNav;
