import { Grid } from "antd";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import Logo from "../shared/UserPhotos/BongaLogo.jpg";

function LetterHead() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBlock: "3rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "90%",
          borderBottom: "1px solid #eaeaea",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <h4 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            BONGA UNIVERSITY
          </h4>
          <div>
            <MailOutlineIcon /> 334 &nbsp; <PhoneInTalkIcon />
            251-47 83-19800
          </div>
          <div>BONGA</div>
        </div>

        {/* Middle Column */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={Logo} alt="" style={{ marginLeft: "-35%" }} width={100} />
        </div>

        {/* Third Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <h4 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            OFFICE OF THE REGISTRAR
          </h4>
          <div>
            <OpenInBrowserIcon /> www.bongau.edu.et
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetterHead;
