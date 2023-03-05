import React from "react";
import Button from "@mui/material/Button";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

export default function News() {
  // use react query
  // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3b46a37a209f4f809da07415c36af259
  const navigate = useNavigate();

  const businessNews = () => {
    navigate("business");
  };
  const sportsNews = () => {
    navigate("sports");
  };
  return (
    <>
      <h4>
        You are subscribed to read two type of news
        <br />
        <Button size="small" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </h4>
      <Button variant="text" onClick={businessNews}>
        Sports
      </Button>
      <Button variant="text" onClick={sportsNews}>
        Business
      </Button>
      <Outlet />
    </>
  );
}
