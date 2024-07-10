import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const PersonDetails = styled(Box)`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto auto auto;
`;


export const PersonSubItemWrap = styled(Box)`
  /* max-width: 560px; */
  & + & {
    border-top: 2px solid #0b0a0a26;
  }
`;
