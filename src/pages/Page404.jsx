import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="page-404">
      <h1>Page not found !!!</h1>
      <Link to="/">На головну</Link>
    </div>
  );
};