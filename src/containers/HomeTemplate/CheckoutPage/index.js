import { Grid } from "@material-ui/core";
import React from "react";

export default function CheckoutPage() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={9}>
          bên trái
        </Grid>
        <Grid item xs={12} md={3}>
          bên phải
        </Grid>
      </Grid>
    </div>
  );
}
