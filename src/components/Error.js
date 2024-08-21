import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOps!</h1>
      <h1>Something Went Wrong</h1>
      <h3>
        {err.status}:{err.statusText}{" "}
      </h3>
    </div>
  );
};

export default Error;
