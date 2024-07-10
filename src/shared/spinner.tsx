import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import CircularProgress from "@mui/material/CircularProgress";

interface ISpinner {
  size?: number;
}

const SpinnerWrap = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Spinner = ({ size = 40 }: ISpinner) => {
  return (
    <SpinnerWrap data-testid="spinner_element">
      <CircularProgress size={size} />
    </SpinnerWrap>
  );
};

export default Spinner;
