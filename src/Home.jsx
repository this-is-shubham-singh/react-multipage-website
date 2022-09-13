import React, { useEffect } from "react";
import Herosection from "./Components/Herosection";
import { Useglobalcontext } from "./Context";

const Home = () => {
  const { Updatehomepage } = Useglobalcontext();

  useEffect(() => {
    Updatehomepage();
  }, []);

  return <Herosection />;
};

export default Home;
