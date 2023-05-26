import PageContainer from "../lib/PageContainer";
import { Button, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES_PATH } from "../../RoutesPath/routes";
import { useContextFunction } from "../../context/ContextApi";

const HeaderBottom = () => {
  const tokenLocal = useContextFunction();
  console.log(tokenLocal + "Locljhsfbjhfgngdng");

  function changeToken() {
    localStorage.removeItem("token");
  }

  return (
    <PageContainer>
      <Flex width="full" h="50px" bg="skyblue" justifyContent="flex-end">
        <Flex columnGap={10} mr={20}>
          {tokenLocal.token == "" ? (
            <Button
              as={NavLink}
              to={ROUTES_PATH.LOGIN_FORM}
              fontWeight="bold"
              fontSize="22px"
              textDecoration="none"
              color="white"
            >
              Login
            </Button>
          ) : (
            <Button
              as={NavLink}
              to={ROUTES_PATH.LOGOUT}
              fontWeight="bold"
              fontSize="22px"
              textDecoration="none"
              color="white"
              onClick={changeToken}
            >
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </PageContainer>
  );
};

export default HeaderBottom;
