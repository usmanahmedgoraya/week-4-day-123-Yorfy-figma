import React from "react";
import Button from "@mui/material/Button";

const Buttton = ({ text, bg, border = "",className="" }) => {
  return (
    <Button
      sx={{
        background: bg,
        borderRadius: "10px",
        color: "white",
        textTransform: "initial",
        padding: {
          xs: "0.5rem 1rem",
          sm: "0.7rem 3rem",
          md: "0.7rem 1.9rem",
        },
        border: `2px solid ${bg}`,
        fontSize: { xs: "14px", md: "initial" },
      }}
      className={`${className}`}
    >
      {text}
    </Button>
  );
};

export default Buttton;
