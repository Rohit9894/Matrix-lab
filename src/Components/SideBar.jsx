import { Box, HStack, Heading, Text } from "@chakra-ui/react";

import { AiOutlineLayout } from "react-icons/ai";
import { BsNutFill, BsGrid3X3Gap } from "react-icons/bs";
import { AppState } from "../Context/AppContext";

function SideBar() {
  const { pair, setPair } = AppState();

  const style = {
    pl: "20px",
    py: "10px",
    gap: "40px",
    cursor: "pointer",
  };
  return (
    <Box
      color={"white"}
      px
      w="230px"
      h="100vh"
      borderTopRightRadius="32px"
      bg="#292929"
      display={"flex"}
      flexDirection={"column"}
    >
      <HStack py="10px" pl="20px" mt="20px" align={"center"} gap="40px">
        <AiOutlineLayout size={"20px"} />
        <Heading color="rgba(255, 255, 255, 0.7)">nfTILy</Heading>
      </HStack>
      <HStack
        {...style}
        bg={!pair ? "#F30050" : "none"}
        onClick={() => setPair(!pair)}
      >
        <BsNutFill />
        <Text fontSize={"20px"}>Token</Text>
      </HStack>
      <HStack
        {...style}
        onClick={() => setPair(!pair)}
        bg={pair ? "#F30050" : "none"}
      >
        <BsGrid3X3Gap />
        <Text fontSize={"20px"}>Pair</Text>
      </HStack>
    </Box>
  );
}

export default SideBar;
