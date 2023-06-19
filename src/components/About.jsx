import React from "react";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import NexFor from "./NexFor";
import LoaderHome from "./LoaderHome";
import Header from "./Header";
import NexaiToken from "./NexaiToken";
import OurVision from "./OurVision";
import Security from "./Security";
import Achievements from "./Achievements";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* <LoaderHome /> */}
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
  );
};

export default About;
