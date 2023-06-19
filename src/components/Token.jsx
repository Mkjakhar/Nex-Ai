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
import LoaderHome from "./LoaderHome";

const Token = () => {
  return (
    <div className="overflow-hidden">
      <LoaderHome />
      <Header />
      <NexaiToken
        para="Etiam viverra nec libero a. A id id tempus molestie sed."
        heading="Nexai Token & utility"
      />
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
