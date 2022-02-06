import React from "react";
import { Button  } from "@mui/material";

function ButtonTypingPokemon({ type, ...props }) {
  let styleTyping = {
    
  };
  switch (type) {
    case "normal":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#aa9",
        color: "white !important",
      };
      break;
    case "fire":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#f42",
        color: "white !important",
      };
      break;
    case "water":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#39f",
        color: "white !important",
      };
      break;
    case "electric":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#fc3",
        color: "white !important",
      };
      break;
    case "grass":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#7c5",
        color: "white !important",
      };
      break;
    case "ice":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#6cf",
        color: "white !important",
      };
      break;
    case "fighting":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#b54",
        color: "white !important",
      };
      break;
    case "poison":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#a59",
        color: "white !important",
      };
      break;
    case "ground":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#db5",
        color: "white !important",
      };
      break;
    case "flying":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#89f",
        color: "white !important",
      };
      break;
    case "psychic":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#f59",
        color: "white !important",
      };
      break;
    case "bug":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#ab2",
        color: "white !important",
      };
      break;
    case "rock":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#ba6",
        color: "white !important",
      };
      break;
    case "ghost":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#66b",
        color: "white !important",
      };
      break;
    case "dragon":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#76e",
        color: "white !important",
      };
      break;
    case "dark":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#754",
        color: "white !important",
      };
      break;
    case "steel":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#aab",
        color: "white !important",
      };
      break;
    case "fairy":
      styleTyping = {
        minWidth: "7em",
        backgroundColor: "#e9e",
        color: "white !important",
      };
  }
  return <Button disabled disableRipple sx={styleTyping} {...props} />;
}

export default ButtonTypingPokemon;
