import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export const ListWrap = styled(Box)`
  width: 100%;
  min-height: 450px;
  margin-bottom: 20px;
`;

export const NoResults = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`;

export const NoResultsText = styled(Typography)`
  margin-bottom: 10px;
`
