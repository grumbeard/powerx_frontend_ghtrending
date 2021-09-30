import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <header>
      <h1>404 Page Not Found</h1>
      <Link to="/">Let's find you something else</Link>
    </header>
  );
};