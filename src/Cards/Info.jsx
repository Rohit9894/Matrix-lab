import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
function Info({ createAt, symbol, dexId, pairAdress }) {
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
        Basic info
      </Heading>
      <Flex justify={"space-between"}>
        <Stack lineHeight={"20px"}>
          <Text>Pair created at </Text>
          {/* <Text>Symbol</Text>
          <Text>Dex ID </Text>
          <Text>Pair Address </Text> */}
        </Stack>
        <Stack lineHeight={"20px"}>
          <Text>{createAt}</Text>
          <Text> {symbol}</Text>
          <Text>{dexId}</Text>
          <Text> #6345</Text>
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
        <BsExclamationCircleFill size="20px" />
      </Box>
    </Box>
  );
}

export default Info;
