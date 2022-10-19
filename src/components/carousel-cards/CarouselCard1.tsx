import { Button, Grid, styled } from "@mui/material";
import BazaarImage from "components/BazaarImage";
import { FlexBetween } from "components/flex-box";
import { Paragraph } from "components/Typography";
import { FC } from "react";

// styled component
const StyledBox = styled(FlexBetween)(({ theme }) => ({
  ".title": {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: "1.35rem",
  },
  [theme.breakpoints.up("sm")]: {
    ".grid-item": {
      minHeight: 424,
      display: "flex",
      alignItems: "baseline",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": { fontSize: 32 },
  },
  [theme.breakpoints.down("xs")]: {
    ".title": { fontSize: 16 },
    ".title + *": { fontSize: 13 },
    ".button-link": { height: 36, padding: "0 1.5rem", fontSize: 13 },
  },
}));

// ==================================================
type CarouselCard1Props = {
  title?: string;
  description?: string;
  buttonLik?: string;
  buttonText?: string;
  imgUrl?: string;
  buttonColor?: "dark" | "primary";
};
// ==================================================

const CarouselCard1: FC<CarouselCard1Props> = ({
  title,
  description,
  buttonLik,
  buttonText,
  imgUrl,
  buttonColor = "primary",
}) => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={5} xs={12}>
          <h1 className="title">{title}</h1>
          <Paragraph color="secondary.main" mb={2.7}>
            {description}
          </Paragraph>

          <a href={buttonLik}>
            <Button
              size="large"
              color={buttonColor}
              disableElevation
              variant="contained"
              className="button-link"
              sx={{ height: 44, borderRadius: "4px" }}
            >
              {buttonText}
            </Button>
          </a>
        </Grid>

        <Grid item sm={5} xs={12}>
          <BazaarImage
            alt="apple-watch-1"
            src={imgUrl}
            sx={{
              mx: "auto",
              maxHeight: 400,
              display: "block",
              maxWidth: "100%",
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CarouselCard1;
