import { Box, Container, Grid, keyframes, styled } from "@mui/material";
import CategoryCard1 from "components/category-cards/CategoryCard1";
import { FlexBox } from "components/flex-box";
import { H3, Paragraph, Span } from "components/Typography";
import WhiteButton from "components/WhiteButton";

const data = [
  {
    url: "#",
    title: "Toys",
    id: "62c56550a8d0b277770b9a07",
    img: "/assets/images/categories/cat-1.jpg",
  },
  {
    url: "#",
    title: "Sports",
    id: "62c56550a8d0b277770b9a08",
    img: "/assets/images/categories/cat-2.jpg",
  },
  {
    url: "#",
    title: "Gaming",
    id: "62c56550a8d0b277770b9a09",
    img: "/assets/images/categories/cat-3.jpg",
  },
  {
    url: "#",
    title: "Furniture",
    id: "62c56550a8d0b277770b9a010",
    img: "/assets/images/categories/cat-4.jpg",
  },
  {
    url: "#",
    title: "Fashion",
    id: "62c56550a8d0b277770b9a011",
    img: "/assets/images/categories/cat-5.jpg",
  },
  {
    url: "#",
    title: "Cameras",
    id: "62c56550a8d0b277770b9a012",
    img: "/assets/images/categories/cat-6.jpg",
  },
];

const slideX = keyframes`
    from { left: 120% }
    to { left: -100% }
`;

// custom styled components
const AdWrapper = styled(FlexBox)(({ theme }) => ({
  color: "#fff",
  marginTop: "3rem",
  overflow: "hidden",
  backgroundColor: "#434343",
  position: "relative",
  "::before": {
    inset: 5,
    zIndex: 3,
    content: "''",
    position: "absolute",
    border: "1px dashed #fff",
  },
  [theme.breakpoints.down("sm")]: { flexDirection: "column" },
}));

const AdTitle1 = styled(H3)(({ theme }) => ({
  zIndex: 10,
  fontSize: 27,
  padding: "1.5rem",
  position: "relative",
  backgroundColor: "#e0e0e0",
  textTransform: "uppercase",
  color: theme.palette.dark.main,
  "::after": {
    top: -36,
    bottom: 0,
    zIndex: -1,
    right: -17,
    content: "''",
    position: "absolute",
    transform: "rotate(23deg)",
    border: "70px solid #e0e0e0",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: 16,
    "::after": { display: "none" },
  },
}));

const Section3 = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item lg={2} md={3} sm={4} xs={6} key={item.id}>
            <CategoryCard1 image={item.img} title={item.title} />
          </Grid>
        ))}

        <Grid item xs={12}>
          <AdWrapper alignItems="center">
            <AdTitle1>Black friday sale!</AdTitle1>

            <Paragraph
              fontSize={28}
              sx={{
                flex: 1,
                zIndex: 5,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "hidden",
              }}
            >
              <Span
                sx={{
                  letterSpacing: 1.3,
                  fontStyle: "italic",
                  position: "relative",
                  whiteSpace: "nowrap",
                  textOverflow: "hidden",
                  textTransform: "uppercase",
                  animation: `${slideX} 30s infinite linear 1s`,
                }}
              >
                Pay only for{" "}
                <Span
                  fontWeight={700}
                  textTransform="uppercase"
                  sx={{ textOverflow: "hidden", whiteSpace: "nowrap" }}
                >
                  your loving electronics
                </Span>
              </Span>
            </Paragraph>

            <Box sx={{ padding: 3, flexShrink: 0, zIndex: 5 }}>
              <WhiteButton>Shop Now</WhiteButton>
            </Box>
          </AdWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section3;
