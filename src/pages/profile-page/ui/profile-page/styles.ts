import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export const PersonPaper = styled(Paper)`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;  
  position: relative;
`;

export const PersonCardWrap = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`;

export const PersonDetails = styled(Box)`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 1000px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 740px) {
    grid-template-columns: auto;
  }
`;


export const PersonForm = styled.form`
  width: 100%;
  `

export const SubmitForm = styled(Button)`
  position: absolute;
  top: 20px;
  left: 245px;
`

export const PersonAction = styled(Box)`
  margin: 20px;
  display: flex;
  align-items: center;
`;

export const PersonActionButtons = styled(Box)`
  display: flex;
  align-items: center;
`;

export const ProfileBackButton = styled(Button)`
    margin-right: 10px;
  `
