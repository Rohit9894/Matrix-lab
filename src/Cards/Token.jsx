import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsNutFill } from "react-icons/bs";
function Token({ title, info }) {
  const { address, name, symbol } = info;
  return (
    <Box
      boxSizing="border-box"
      color={"white"}
      bg="#390554"
      px="20px"
      py="20px"
      borderRadius={"10px"}
      position={"relative"}
    >
      <Heading mb="10px" fontSize={"20px"}>
        {title}
      </Heading>
      <Flex justify={"space-between"} position={"relative"}>
        <Stack lineHeight={"20px"}>
          <Text>Name</Text>
          <Text>Symbol</Text>
          <Text>Address</Text>
        </Stack>
        <Stack lineHeight={"20px"}>
          <Text>{name}</Text>
          <Text> {symbol}</Text>
          <Text>#8908</Text>
        </Stack>
      </Flex>
      <Box
        bg="#960252"
        p="10px"
        borderRadius={"50%"}
        position={"absolute"}
        right={4}
        bottom={2}
      >
        <BsNutFill size="20px" />
      </Box>
    </Box>
  );
}

export default Token;
