import { Card, IconButton, Box, CssBaseline } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createTheme, ThemeProvider, createStyles } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import AppleIcon from "@mui/icons-material/Apple";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import avertaCustom from "../AvertaDemo-Regular.otf";
export const fontsTheme = createTheme({
  typography: {
    body2: { 
      fontFamily: avertaCustom,
      fontSize: "1rem",
      fontStyle: "normal", 
      fontWeight: 400, 
      color: "#292929 !important",
    },
    fontFamily: [
      "Averta-Bold",
      "Roboto",
      '"Helvetica Neue"',
      "Averta-Regular",
      "Averta-Bold", // Same as the blis font
      "Averta-Bold", // Same as the blis font

    ].join(","),
  },
});

type GenericProps = { 
  author: string;
  readingTime: number;
  headerText: string;

}

export const GenericCard = ({ author, readingTime, headerText }: GenericProps) => {
  return (
    <div>
      <ThemeProvider theme={fontsTheme}>
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
            marginTop: "10px",
          }}
        >
          <CardMedia
            component="img"
            title="some card title here"
            image={require("../blis1.png")}
            height="180"
          />
          <CardContent sx={{ flex: "1 1 auto", minHeight: "130px", alignItems: "stretch" }}>
            <Typography
              gutterBottom
              variant="h6"
              fontWeight={"bold"}
              align="left"
              alignContent={"baseLine"}
              minHeight={"70px"}
              color={"#21B19D"}
            >
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              {headerText}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Typography variant="body2">
              {readingTime} min read time
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

GenericCard.defaultProps = {
  author: "I am NO author!",
  readingTime: 0, 
  headerText: "\"There's a door.\" \"Where does it go?\" \"It stays where it is, I think.\" "
};

export default GenericCard;
