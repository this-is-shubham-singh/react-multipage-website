import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="servicemaincontainer">
      <h1 className="serviceheading">Our Services</h1>
      <div className="cards">
        <div className="card">
          <img className="cardsimage" src="./images/kash.jpg" />
          <p className="cardpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos libero aliquid nisi quod nesciunt aperiam cumque sit
            molestias laudantium
          </p>
          <div className="buttondiv">
            <button className="cardbutton">READ MORE</button>
          </div>
        </div>
        <div className="card">
          <img className="cardsimage" src="./images/two.png" alt="image" />
          <p className="cardpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos libero aliquid nisi quod nesciunt aperiam cumque sit
            molestias laudantium
          </p>
          <div className="buttondiv">
            <button className="cardbutton">READ MORE</button>
          </div>
        </div>
        <div className="card">
          <img className="cardsimage" src="./images/three.jfif" alt="image" />
          <p className="cardpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos libero aliquid nisi quod nesciunt aperiam cumque sit
            molestias laudantium
          </p>
          <div className="buttondiv">
            <button className="cardbutton">READ MORE</button>
          </div>
        </div>
        <div className="card">
          <img className="cardsimage" src="./images/five.jfif" alt="image" />
          <p className="cardpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos libero aliquid nisi quod nesciunt aperiam cumque sit
            molestias laudantium
          </p>
          <div className="buttondiv">
            <button className="cardbutton">READ MORE</button>
          </div>
        </div>
        <div className="card">
          <img className="cardsimage" src="./images/six.jpg" alt="image" />
          <p className="cardpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos libero aliquid nisi quod nesciunt aperiam cumque sit
            molestias laudantium
          </p>
          <div className="buttondiv">
            <button className="cardbutton">READ MORE</button>
          </div>
        </div>
        <div className="card">
          <img className="cardsimage" src="./images/seven.jpg" alt="image" />
          <p className="cardpara">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos libero aliquid nisi quod nesciunt aperiam cumque sit
            molestias laudantium
          </p>
          <div className="buttondiv">
            <button className="cardbutton">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

// {Servicedata.map((val) => {
//   return (
//     <Card
//       image={val.image}
//       content={val.content}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// })}
