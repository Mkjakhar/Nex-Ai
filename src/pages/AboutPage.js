import React from "react";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import NexFor from "../components/NexFor";
import LoaderHome from "../components/LoaderHome";
import Header from "../components/Header";
import NexaiToken from "../components/NexaiToken";
import OurVision from "../components/OurVision";
import Security from "../components/Security";
import Achievements from "../components/Achievements";
import OurTeam from "../components/OurTeam";

const AboutPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <LoaderHome />
        <Header />
        <NexaiToken
          heading="The Nexai for best ai-assistant experience"
          maxwidth="max_w_775px"
        />
        <Security />
        <OurVision />
        <OurTeam />
        <Achievements />
        <NexFor />

        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
