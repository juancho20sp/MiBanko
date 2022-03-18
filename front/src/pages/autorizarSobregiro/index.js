import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BoxSobregiros from "../../components/boxSobregiros";
export function AutorizarSobregiro() {
  const [overdraws, setOverdraws] = useState([" "]);
  useEffect(() => {
    axios
      .get(window.$dir + `api/v1/transactions/getOverdraws`)
      .then((response) => {
        let overdrawsArray = [];
        for (let i = 0; i < Object.keys(response.data.result).length; i++) {
          overdrawsArray.push(response.data.result[i]);
        }
        setOverdraws(overdrawsArray);
      });
  }, []);
  return (
    <RootWrapperAutorizarSobregiro>
      {/* <Rectangle5 xmlns="http://www.w3.org/2000/svg">
                <path fill="rgba(196, 196, 196, 0.3)" d="M0 19.25C0 8.61852 14.1406 0 31.5839 0L985.416 0C1002.86 0 1017 8.61852 1017 19.25L1017 596.75C1017 607.381 1002.86 616 985.416 616L31.5839 616C14.1406 616 0 607.381 0 596.75L0 19.25Z" />
            </Rectangle5> */}
      <AutorizarSobregiros>
        <h1> Autorizar Sobregiros</h1>
      </AutorizarSobregiros>
      <BoxContainer>
        {overdraws ? (
          overdraws.map((element, index) => {
            return <BoxSobregiros key={index} usrData={element} />;
          })
        ) : (
          <></>
        )}
      </BoxContainer>

      {/* <Rectangle5Stroke xmlns="http://www.w3.org/2000/svg">
                <path fill="rgba(0, 0, 0, 1)" d="M985.416 0.9625L31.5839 0.9625C15.0127 0.9625 1.57919 9.15009 1.57919 19.25L1.57919 596.75C1.57919 606.85 15.0128 615.037 31.5839 615.037L985.416 615.037C1001.99 615.037 1015.42 606.85 1015.42 596.75L1015.42 19.25C1015.42 9.15009 1001.99 0.9625 985.416 0.9625ZM31.5839 0C14.1406 0 0 8.61852 0 19.25L0 596.75C0 607.381 14.1406 616 31.5839 616L985.416 616C1002.86 616 1017 607.381 1017 596.75L1017 19.25C1017 8.61852 1002.86 0 985.416 0L31.5839 0Z" />
            </Rectangle5Stroke> */}
    </RootWrapperAutorizarSobregiro>
  );
}

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  margin-top: 40px;
`;

const RootWrapperAutorizarSobregiro = styled.div`
  background-color: rgba(255, 255, 255, 1);
  position: relative;
`;

const Rectangle5 = styled.svg`
  width: 1017px;
  height: 616px;
  position: absolute;
  left: 247px;
  top: 191px;
`;

const AutorizarSobregiros = styled.div`
  color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  margin-top: 50px;
`;

const Rectangle6 = styled.div`
  width: 981px;
  height: 144px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 260px;
  top: 222px;
`;

const Rectangle16 = styled.div`
  width: 981px;
  height: 144px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 260px;
  top: 386px;
`;

const Rectangle19 = styled.div`
  width: 981px;
  height: 144px;
  background-color: rgba(196, 196, 196, 1);
  border-radius: 20px;
  position: absolute;
  left: 260px;
  top: 550px;
`;

const Deuda4350 = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 624px;
  top: 274px;
`;

const Deuda4350_0001 = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 624px;
  top: 438px;
`;

const Deuda4350_0002 = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 624px;
  top: 602px;
`;

const SergioValderrama = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 277px;
  top: 274px;
`;

const SergioValderrama_0001 = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 277px;
  top: 438px;
`;

const SergioValderrama_0002 = styled.span`
  color: rgba(0, 0, 0, 1);
  text-overflow: ellipsis;
  font-size: 35px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  text-align: left;
  position: absolute;
  left: 277px;
  top: 602px;
`;

const Rectangle5Stroke = styled.svg`
  width: 1017px;
  height: 616px;
  position: absolute;
  left: 247px;
  top: 191px;
`;

const Rectangle14 = styled.div`
  width: 68px;
  height: 68px;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 1020px;
  top: 260px;
`;

const Rectangle17 = styled.div`
  width: 68px;
  height: 68px;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 1020px;
  top: 424px;
`;

const Rectangle20 = styled.div`
  width: 68px;
  height: 68px;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 1020px;
  top: 588px;
`;

const Rectangle15 = styled.div`
  width: 68px;
  height: 68px;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 1135px;
  top: 260px;
`;

const Rectangle18 = styled.div`
  width: 68px;
  height: 68px;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 1135px;
  top: 424px;
`;

const Rectangle21 = styled.div`
  width: 68px;
  height: 68px;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  left: 1135px;
  top: 588px;
`;

const Line2 = styled.div`
  width: 36px;
  height: 36px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1036px;
  top: 276px;
  transform: rotate(315deg);
`;

const Line6 = styled.div`
  width: 36px;
  height: 36px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1036px;
  top: 440px;
  transform: rotate(315deg);
`;

const Line10 = styled.div`
  width: 36px;
  height: 36px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1036px;
  top: 604px;
  transform: rotate(315deg);
`;

const Line3 = styled.div`
  width: 36px;
  height: 39px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1036px;
  top: 271px;
  transform: rotate(227deg);
`;

const Line7 = styled.div`
  width: 36px;
  height: 39px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1036px;
  top: 435px;
  transform: rotate(227deg);
`;

const Line11 = styled.div`
  width: 36px;
  height: 39px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1036px;
  top: 599px;
  transform: rotate(227deg);
`;

const Line5 = styled.div`
  width: 18px;
  height: 17px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1148px;
  top: 298px;
  transform: rotate(136deg);
`;

const Line8 = styled.div`
  width: 18px;
  height: 17px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1148px;
  top: 462px;
  transform: rotate(136deg);
`;

const Line12 = styled.div`
  width: 18px;
  height: 17px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1148px;
  top: 626px;
  transform: rotate(136deg);
`;

const Line4 = styled.div`
  width: 36px;
  height: 39px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1160px;
  top: 276px;
  transform: rotate(227deg);
`;

const Line9 = styled.div`
  width: 36px;
  height: 39px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1160px;
  top: 440px;
  transform: rotate(227deg);
`;

const Line13 = styled.div`
  width: 36px;
  height: 39px;
  border: solid 5px rgba(196, 196, 196, 1);
  position: absolute;
  left: 1160px;
  top: 604px;
  transform: rotate(227deg);
`;
