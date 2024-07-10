import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ProfileListWrap = styled(Box)`
  width: 100%;
  min-height: 600px;
  margin-top: 20px;

  @media (max-width: 1250px) {
    min-width: 640px;
  }

  @media (max-width: 768px) {
    min-width: 280px;
  }

  @media (min-width: 1268px) {
    min-width: 1200px;
  }
`;


