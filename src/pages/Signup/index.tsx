import React from "react";
import styled from "@emotion/styled";
import car from "../../assets/car.png";

const Base = styled.div`
  margin: 0;
  padding: 0;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 12.4rem;
  left: 1.6rem;
`;

const HeaderTitle = styled.h1`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2.8rem;
  margin: 0;
  padding: 0;
  color: #151515;
  display: inline-block;
`;

const HeaderImg = styled.img`
  position: relative;
  display: inline-block;
  left: 0.7rem;
`;

const HeaderContent = styled.div`
  margin-top: 2rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  letter-spacing: -0.0408rem;
  font-feature-settings: "case" on;

  color: #151515;
`;

const FooterContainer = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
`;
const FooterText = styled.div`
  width: 100%;
  position: relative;
  left: auto;
  bottom: 12.3rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: center;

  letter-spacing: -0.024rem;
  font-feature-settings: "case" on;

  color: #151515;
`;
const FooterLink = styled.a`
  /* Headline/Sub-head/Bold */
  position: relative;
  width: 100%;
  left: auto;
  bottom: 12.1rem;
  display: block;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: -0.05rem;
  font-feature-settings: "case" on;

  /* Shade/Gray */

  color: #575757;
`;
const FooterButton = styled.button`
  position: relative;
  width: 80%;
  margin: auto;
  bottom: 10.5rem;
  display: block;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: -0.0408rem;
  font-feature-settings: "case" on;

  /* Shade/White */

  color: #ffffff;

  background: #007aff;
  border-radius: 100px;
  padding: 1.3rem 0;
  border: 0;
`;

export default function Signup() {
  return (
    <Base>
      <HeaderContainer>
        <HeaderTitle>
          경운대학교 <br />
          카풀 서비스
        </HeaderTitle>
        <HeaderImg src={car} />
        <HeaderContent>
          간편하게 가입하고 <br />
          카풀 서비스를 이용해보세요
        </HeaderContent>
      </HeaderContainer>

      <FooterContainer>
        <FooterText>이미 아이디가 있으신가요?</FooterText>
        <FooterLink>로그인하기</FooterLink>
        <FooterButton>시작하기</FooterButton>
      </FooterContainer>
    </Base>
  );
}
