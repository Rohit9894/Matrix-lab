import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

function Price({ price, usd }) {
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
        Price
      </Heading>
      <Flex justify={"space-between"}>
        <Stack lineHeight={"20px"}>
          <Text>Price Native </Text>
          <Text>Price USD</Text>
        </Stack>
        <Stack lineHeight={"20px"}>
          <Text>{price}</Text>
          <Text> {usd}</Text>
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
        <BsCurrencyDollar size="20px" />
      </Box>
    </Box>
  );
}

export default Price;
