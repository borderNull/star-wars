

export const Fallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => {

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <button onClick={resetErrorBoundary}></button>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
