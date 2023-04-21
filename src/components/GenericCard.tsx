import { Card, IconButton, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme, ThemeProvider, createStyles } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import AppleIcon from "@mui/icons-material/Apple";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import logo from "../logo.svg";
import React from "react";

interface WhatsNew {
  author: string;
  imageSource?: string;
  readingTime: number;
  blogSource?: string; // optional ... FOR NOW!
  headerText: string;
}

const theme = createTheme({
  typography: {
    fontFamily: [
      "Averta-Bold",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "Averta-Bold", // Same as the blis font
      "Averta-Bold", // Same as the blis font
    ].join(","),
  },
});

function GenericCard() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            maxWidth: 347,
            borderRadius: "15px",
            boxShadow: "8px 8px 4px lightgrey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            alignItems: "stretch",
          }}
        >
          <CardMedia
            component="img"
            title="mediaTitleHere"
            image={require("../blis1.png")}
            height="180"
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              gutterBottom
              variant="h6"
              fontWeight={"bold"}
              align="left"
              color={"#21B19D"}
            >
              By Darth Vader
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              Something Something Dark Side Something Something "and the
              children too".
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              3 min read time
            </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <IconButton aria-label="apple">
                <AppleIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default GenericCard;
