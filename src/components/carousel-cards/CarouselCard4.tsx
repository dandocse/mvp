/* eslint-disable react/no-unescaped-entities */
import { Box, Button, styled } from "@mui/material";
import { H1, H4, Paragraph, Span } from "components/Typography";
import WhiteButton from "components/WhiteButton";
import React, { FC } from "react";

// custom styled components
const CardWrapper = styled(Box)<{ img: string; mode: string }>(
  ({ theme, img, mode }) => ({
    minHeight: 500,
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${img})`,
    backgroundColor: mode === "dark" ? "#000" : "#fff",
    color: mode === "light" ? theme.palette.dark.main : "#fff",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      padding: 24,
      textAlign: "center",
      backgroundImage: "none",
    },
  })
);

// ===============================================================
type CarouselCard4Props = {
  bgImage?: string;
  mode?: "dark" | "light";
  content?: React.ReactChild;
};
// ===============================================================

const CarouselCard4: FC<CarouselCard4Props> = ({
  bgImage,
  mode = "dark",
  content,
}) => {
  return (
    <CardWrapper img={bgImage} mode={mode}>
      {content}
    </CardWrapper>
  );
};

export default CarouselCard4;
