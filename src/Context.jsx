import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const Appcontext = createContext();

const initialState = {
  name: "",
  image: "",
};

// App provider has all the application data inside it
// Appprovider is called in index.js with everything inside it
const Appprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  // when this function will be called then dispatch will be called automatically
  // and when dispatch will be called then automatically action inside reducer will be called
  const Updatehomepage = () => {
    return dispatch({
      type: "home-update",
      payload: {
        smallheading: "We Are",
        name: "REACT PVT LIMITED",
        description:
          "we provide all kinds of IT certifications from web development to software testing",
        image: "./images/home.png",
      },
    });
  };

  const Updateaboutpage = () => {
    return dispatch({
      type: "about-update",
      payload: {
        smallheading: "This is",
        name: "SHUBHAM KUMAR SINGH",
        image: "./images/about.jpg",
        description:
          "i am react js front end developer, and this is my project website",
      },
    });
  };

  return (
    <>
      <Appcontext.Provider
        value={{ ...state, Updatehomepage, Updateaboutpage }}
      >
        {children}
      </Appcontext.Provider>
    </>
  );
};
// now all the components which are inside Appprovider can access these values


// global custom hook
// using usecontext here itself to avoid lot of code in other component
const Useglobalcontext = () => {
  return useContext(Appcontext);
};

export default Appprovider;
export { Useglobalcontext };
