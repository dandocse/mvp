import { Container, Grid } from "@mui/material";
import CategoryCard1 from "components/category-cards/CategoryCard1";
import { H2 } from "components/Typography";

const data = [
  {
    url: "#",
    id: "62c56550a8d0b277770b9a07",
    title: "Men's Fashion",
    img: "/assets/images/products/t-shirt4.png",
  },
  {
    url: "#",
    id: "62c56550a8d0b277770b9a08",
    title: "Women's Fashion",
    img: "/assets/images/products/t-shirt5.png",
  },
  {
    url: "#",
    title: "Gadgets",
    id: "62c56550a8d0b277770b9a09",
    img: "/assets/images/products/smartwatch-2.png",
  },
  {
    url: "#",
    id: "62c56550a8d0b277770b9a010",
    title: "Cosmatics",
    img: "/assets/images/products/casmatics.jpg",
  },
];

const Section3 = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <H2 textAlign="center" mb={4}>
        Best selling Categories
      </H2>

      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item md={3} sm={6} xs={12} key={item.id}>
            <CategoryCard1 image={item.img} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section3;
