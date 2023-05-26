import React from "react";
import { Box } from "@chakra-ui/react";

interface IProps {
  children: React.ReactElement;
}

const PageContainer: React.FC<IProps> = ({ children }) => {
  return (
    <Box mx="auto" w="96%">
      {children}
    </Box>
  );
};

export default PageContainer;
