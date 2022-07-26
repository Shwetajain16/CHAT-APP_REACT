import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SideSection from "../Components/miscellaneous/SideSection";
import ChatSection from "../Components/miscellaneous/ChatSection";
import MessageSection from "../Components/miscellaneous/MessageSection";
import { useState } from "react";

const ChatScreen = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideSection />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="4px"
      >
        {user && <ChatSection fetchAgain={fetchAgain} />}
        {user && (
          <MessageSection
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        )}
      </Box>
    </div>
  );
};
export default ChatScreen;
