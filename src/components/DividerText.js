import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  opacity: 0.4,
  marginTop: theme.spacing(0),
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  return (
    <Root>
      <Divider>O</Divider>
    </Root>
  );
}
