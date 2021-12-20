import React from "react";
import Card from "../components/Card/Card";
import Styled from "../components/Main/Main.module.css";


const About = () => {
  const data = [
      {
          name: "Carlos Gomez",
          img: "LogoCarandev",
          description: "Programador Frontend"
  },
      {
          name: "Will Arnache",
          img: "LogoDefredsho",
          description: "Programador Backend"
      },

  ]
    return (
        <main className={Styled.main}>
            <Card data={data[0]} about/>
            <Card data={data[1]} about/>
        </main>
    );
};

export default About;
