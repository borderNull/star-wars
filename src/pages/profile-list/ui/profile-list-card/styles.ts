import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";


export const ProfileCardActions = styled(CardActions)`
  justify-content: center;
  margin-top: auto;
`;

export const ProfileCardButton = styled(Button)`
  width: 100%;
  a {
    color: #fff;
  }
`

export const ProfileLink = styled(Link)`
  width: 100%;
`

export const ProfileCard = styled(Card)`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  background: aliceblue;
`;

export const ProfileCardName = styled(Typography)`
  font-size: 2rem;
  text-align: center;


  @media (max-width: 1250px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const ProfileCardArea = styled(CardActionArea)`
  flex-grow: 1;
`


