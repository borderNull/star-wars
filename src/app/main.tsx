import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, Link } from "react-router-dom";
import { router } from './router'
import { ROUTES } from "./routes";
import { queryClient } from "./query-client";
import { ErrorBoundary } from "react-error-boundary";

const Fallback = ({ error, resetErrorBoundary }) => {
  console.log("🚀 ~ Fallback ~ error:", error)
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <Link to={ROUTES.LIST}>to list</Link>
    </div>
  );
}


import "./index.css";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>


      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
