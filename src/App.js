import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <Flex gap="20px">
        <Box display={["none", "none", "flex"]}>
          <SideBar />
        </Box>
        <Box>
          <Content />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
