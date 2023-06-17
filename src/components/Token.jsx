import React from "react";
import NexaiToken from "./NexaiToken";
import Header from "./Header";
import BlockchainCrypto from "./BlockchainCrypto";
import NexaiProcess from "./NexaiProcess";
import Community from "./Community";
import Algorithum from "./Algorithum";
import WhiteList from "./WhiteList";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const Token = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <NexaiToken />
      <BlockchainCrypto />
      <NexaiProcess />
      <Community />
      <WhiteList />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Token;
