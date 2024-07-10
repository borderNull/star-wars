
import Typography from "@mui/material/Typography";

import ErrorIcon from '@mui/icons-material/Error';

import { OfflineBox } from "./styles";


export const ErrorOffline = () => {
  return (

    <OfflineBox>
      <ErrorIcon fontSize="large" />
      <Typography variant="h1">Internet connection is off</Typography>
    </OfflineBox>
  )
}