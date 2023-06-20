import React from "react";
import NexaiToken from "../components/NexaiToken";
import Header from "../components/Header";
import BlockchainCrypto from "../components/BlockchainCrypto";
import NexaiProcess from "../components/NexaiProcess";
import Community from "../components/Community";
import WhiteList from "../components/WhiteList";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import LoaderHome from "../components/LoaderHome";

const TokensPage = () => {
  return (
    <>
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
    </>
  );
};

export default TokensPage;
