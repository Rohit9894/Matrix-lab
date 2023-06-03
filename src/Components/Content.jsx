import React from "react";
import { AppState } from "../Context/AppContext";
import PairResult from "./PairResult";
import TokenResult from "./TokenResult";

function Content() {
  const { pair } = AppState();
  return <div>{pair ? <PairResult /> : <TokenResult />}</div>;
}

export default Content;
