import React, { useState, useEffect } from "react";
import { Paper, Switch } from "@mui/material";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductDetails from "../components/productDetails";
import ProductListThunk from "../components/productListThunk";

function Home() {
  return (
    <>
      <ProductListThunk />
      {/* <ProductDetails /> */}
    </>
  )
}

export default Home;
