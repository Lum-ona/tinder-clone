import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img className="header_logo" src="/images/download.png" />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
}

export default Header;
