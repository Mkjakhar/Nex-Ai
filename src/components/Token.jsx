import React from "react";
import NexaiToken from "./NexaiToken";
import Header from "./Header";
import BlockchainCrypto from "./BlockchainCrypto";
import NexaiProcess from "./NexaiProcess";

const Token = () => {
  return (
    <div>
      <Header />
      <NexaiToken />
      <BlockchainCrypto />
      <NexaiProcess />
    </div>
  );
};

export default Token;
