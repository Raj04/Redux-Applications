import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
//Lists all users
export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter");
  return (
    <>
      {showActiveUsers ? (
        <>
          {" "}
          <h1>User 1</h1>
          <h1>User 2</h1>
          <h1>User 3</h1>
        </>
      ) : (
        ""
      )}
      <Outlet />
      <div>
        <Button
          variant="text"
          onClick={() => setSearchParams({ filter: "active" })}
        >
          Active Users
        </Button>
        <Button variant="text" onClick={() => setSearchParams({})}>
          Reset Filter
        </Button>
      </div>
    </>
  );
};
