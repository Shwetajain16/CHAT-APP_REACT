import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFucntion }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={14}
      backgroundColor="black"
      color="white"
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFucntion}
    >
      {user.name}
      <CloseIcon pl={2} />
    </Box>
  );
};

export default UserBadgeItem;
