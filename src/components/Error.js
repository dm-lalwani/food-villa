import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops!!</h1>
      <h3>Something went wrong with the routes...</h3>
      <p>{err.status + " : " + err.statusText}</p>
    </>
  );
};

export default Error;
