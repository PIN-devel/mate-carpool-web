import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #007aff;
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.h1`
  margin: 0;
  width: 100vw;
  position: absolute;
  top: auto;
  left: auto;
  font-family: "Archivo Black";
  font-style: normal;
  font-weight: 400;
  font-size: 5.8rem;
  line-height: 100vh;
  text-align: center;
  letter-spacing: 0.0666667rem;
  color: #ffffff;
`;

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("signup");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Base>
      <Logo>MATE</Logo>
    </Base>
  );
}
