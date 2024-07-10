import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const PersonDetailsRow = styled(Box)`
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  gap: 10px;
`;

export const PersonDetailItemWrap = styled(Box) <{ fullwidth: number }>`
  grid-column: ${props => props.fullwidth ? '1/5' : 'auto'};
  
  @media (max-width: 1650px) {
  display: ${props => props.fullwidth ? 'none' : 'block'};
  }
`

export const PersonDetailsTitle = styled(Typography)`
  text-transform: capitalize;
`;

export const PersonDetailsText = styled(Typography)`
  max-width: 350px;
`;


