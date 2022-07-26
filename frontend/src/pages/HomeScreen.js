import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  Text,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent className="home">
      <Box
        display="flex"
        justifyContent="center"
        padding={6}
        bg={"white"}
        width="100%"
        backgroundColor="#F2653B"
        m="60px.0.15px.0"
        borderRadius="lg"
        borderWidth="5px"
      >
        <Text fontSize="30px" align="center" color="black">
          MINUN
        </Text>
      </Box>{" "}
      <br />
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="5px">
        <Tabs variant="soft-rounded">
          <TabList mb="8px">
            <Tab width="50%"> Log in</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>

            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};
export default HomeScreen;
