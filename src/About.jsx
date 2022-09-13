import React, { useEffect } from "react";
import Herosection from "./Components/Herosection";
import { Useglobalcontext } from "./Context";

const About = () => {
  const { Updateaboutpage } = Useglobalcontext();

  useEffect(() => {
    Updateaboutpage();
  }, []);

  return <Herosection />;
};

export default About;
