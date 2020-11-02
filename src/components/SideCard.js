import React, { Image } from "react";
import online from "../media/online.png";
export default function SideCard() {
  return (
    <div
      style={{
        height: "25rem",
        width: "15rem",
        border: "4px solid lightgrey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: ".5rem",
        padding: "1rem",
      }}
    >
      <img
        style={{ height: "8rem", padding: "1rem" }}
        src={online}
        alt='online banking'
      />
      <h3
        style={{
          padding: 0,
          margin: 0,
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "lighter",
        }}
      >
        anytime access
      </h3>
      <p style={{ textAlign: "center", fontWeight: "lighter" }}>
        Fast, easy, and secure access to your accounts using Online Banking.
        Enjoy the convenience of banking anywhere, at anytime.
      </p>
      <a
        style={{
          padding: "1rem",
          textTransform: "capitalize",
          textDecoration: "none",
          textAlign: "center",
        }}
        href='/'
      >
        explore online banking
      </a>
    </div>
  );
}
