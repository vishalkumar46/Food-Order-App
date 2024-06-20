import { useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>!!Opps something went wrong</h1>
      <h2>{error.status}:{error.statusText}</h2>
    </>
  );
};
