import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Info from "../Cards/Info";
import Token from "../Cards/Token";
import Price from "../Cards/Price";
import { AiOutlineSearch } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

import { ConnectButton } from "@rainbow-me/rainbowkit";
function PairResult() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const pairRef = useRef("");

  function getData(pairValue = "0x7213a321F1855CF1779f42c0CD85d3D95291D34C") {
    setLoading(true);
    fetch(`https://api.dexscreener.com/latest/dex/pairs/bsc/${pairValue}`)
      .then((res) => res.json())
      .then((res) => {
        if (!res.pairs) {
          alert("invalid input");
          return;
        } else {
          setLoading(false);
          setData(res?.pairs);
        }
      })
      .catch((err) => console.log(err.message));
  }
  useEffect(() => {
    getData();
  }, []);
  function handleClick() {
    getData(pairRef.current.value);
  }
  return (
    <div>
      <Flex
       
        justifyContent={"space-between"}
        px="20px"
        alignItems={"center"}
      >
        <HStack py="10px" mt="20px" align={"center"}>
          <RxHamburgerMenu size={"20px"} color="white" />
          <Heading color="rgba(255, 255, 255, 0.7)">nfTILy</Heading>
        </HStack>
        <Button>Connect</Button>
      </Flex>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={["none", "60px"]}
      >
        <InputGroup
          size="md"
          w={["full", "435px"]}
          px={["20px", "none"]}
          mt="20px"
        >
          <Input
            pr="4.5rem"
            h="50px"
            focusBorderColor="white"
            defaultValue={"Search"}
            borderRadius={"20px"}
            ref={pairRef}
            color={"white"}
          />
          <InputRightElement width="4.5rem">
            <Button
              variant={"unstyled"}
              mt="10px"
              onClick={() => handleClick()}
            >
              <AiOutlineSearch color="white" size={"30px"} />
            </Button>
          </InputRightElement>
        </InputGroup>

        <Box display={["none", "block"]}>
          <ConnectButton />
        </Box>
      </Box>

      <Heading textAlign={"center"} fontSize={"25px"} color="white" mt="30px">
        Pair Search Results
      </Heading>
      {loading ? (
        <Heading py="20px" fontSize={"20px"} color={"white"}>
          Loading...
        </Heading>
      ) : (
        <SimpleGrid mt="20px" columns={[1, 4]} gap="20px">
          {data.map((item) => (
            <>
              <Info
                key={uuidv4()}
                createAt={item.pairCreatedAt}
                symbol={item.chainId}
                dexId={item.dexId}
                pairAdress={item.pairAddress}
              />
              <Token key={uuidv4()} title="baseToken" info={item.baseToken} />
              <Token key={uuidv4()} title="quoteToken" info={item.quoteToken} />
              <Price
                key={uuidv4()}
                price={item.priceNative}
                usd={item.priceUsd}
              />
            </>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
}

export default PairResult;
