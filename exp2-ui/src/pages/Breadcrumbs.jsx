import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div style={{ marginBottom: "15px", fontSize: "14px" }}>
      <Link to="/">Home</Link>

      {paths.map((name, index) => {
        const routeTo = `/${paths.slice(0, index + 1).join("/")}`;

        return (
          <span key={routeTo}>
            {" / "}
            <Link to={routeTo}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
