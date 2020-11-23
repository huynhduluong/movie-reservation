import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function UserIcon() {
  return (
    <React.Fragment>
      <AccountCircleIcon color="action" />
      <span style={{ marginLeft: "8px" }}>Đăng nhập</span>
    </React.Fragment>
  );
}
