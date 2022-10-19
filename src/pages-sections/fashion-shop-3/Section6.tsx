import { Instagram } from "@mui/icons-material";
import { Box, Container, Grid, styled } from "@mui/material";
import { H2 } from "components/Typography";
import Image from "next/image";
import { FC } from "react";

const data = [
  "/assets/images/blogs/post-1.jpg",
  "/assets/images/blogs/post-2.jpg",
  "/assets/images/blogs/post-3.jpg",
  "/assets/images/blogs/post-4.jpg",
  "/assets/images/blogs/post-5.jpg",
  "/assets/images/blogs/post-6.jpg",
];

// custom styled components
const ImageWrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  ":hover": {
    "::before": { opacity: 0.6 },
    "& .MuiSvgIcon-root": { opacity: 1, transform: "rotate(0deg) scale(1)" },
  },
  "::before": {
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "all 0.3s",
    backgroundColor: theme.palette.dark.main,
  },
}));

const InstagramIcon = styled(Instagram)(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
  opacity: 0,
  color: "#fff",
  margin: "auto",
  position: "absolute",
  transition: "all 0.3s",
  transform: "rotate(90deg) scale(2)",
}));

// ===========================================================
type Props = { serviceList?: any[] };
// ===========================================================

const Section6: FC<Props> = () => {
  return (
    <Container sx={{ mt: "4rem" }}>
      <H2 textAlign="center" mb={4}>
        Our Instagram
      </H2>

      <Grid container spacing={2}>
        {data.map((item, i) => (
          <Grid item md={2} sm={4} xs={6} key={i}>
            <ImageWrapper>
              <Image
                alt="post"
                width={100}
                height={100}
                layout="responsive"
                src={item}
              />
              <InstagramIcon />
            </ImageWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section6;
