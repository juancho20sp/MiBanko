import React from 'react'
import styled from "styled-components";

const BoxSobregiros = ({usrData}) => {
  return (
    <SobregiroContainer>
        <div class="row">
            <div class="column"></div>
            {usrData? usrData.usr_name+" "+usrData.usr_lastname +" Deuda:"+ usrData.amount_overdraw:<></>}
            <div class="column"><BtnAccept>Yes</BtnAccept>
        <BtnReject>No</BtnReject></div>
        </div>

        
    </SobregiroContainer>
  )
}
const SobregiroContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    margin-top: 4px;
`;
const BtnAccept = styled.button`
    display: block;
    flex-grow: 1;
    flex-shrink: 2;
    flex-basis: auto;
    align-self: auto;
    order: 0;
`;
const BtnReject = styled.button`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    margin-top:40px;
`;
export default BoxSobregiros