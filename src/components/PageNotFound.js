import React from "react";
import { Link } from "react-router-dom";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const PageNotFound = () => {
  return (
    <div>
      <h1 style={styles}>404 PAGE NOT FOUND</h1>
      <div style={styles}>
        <Link to='/login'>
          <h3 style={{ color: "red" }}>{`>> Return to  LOGIN << `}</h3>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
