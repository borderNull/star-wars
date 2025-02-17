
import { useRouteError, Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import { ErrorWrap, ErrorText } from './styles';
import { ROUTES } from '../app/routes';

interface IError {
  error?: {
    message?: string;
  }
}

function ErrorBoundary() {
  const error = useRouteError() as IError;
  console.error('error !!!!', error);

  return (
    <ErrorWrap>
      <ErrorText variant='h2'>{error?.error?.message}</ErrorText>
      <Link to={ROUTES.LIST}>
        <Button variant='contained'>Go to List</Button>
      </Link>
    </ErrorWrap>
  );
}

export default ErrorBoundary