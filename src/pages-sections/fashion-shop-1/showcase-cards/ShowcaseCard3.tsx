import { alpha, Grid, styled } from "@mui/material";
import BazaarImage from "components/BazaarImage";
import NavLink2 from "components/nav-link/NavLink2";
import { H1, Paragraph, Span } from "components/Typography";
import Link from "next/link";
import React, { FC } from "react";

// styled component
const StyledGrid = styled(Grid)(({ theme }) => ({
  borderRadius: 4,
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  backgroundColor: "#fff",
  border: `1px solid ${theme.palette.grey[200]}`,
  "&:hover": { boxShadow: theme.shadows[3], borderColor: "transparent" },
  [theme.breakpoints.down("sm")]: {
    "&": { padding: "2rem", paddingBottom: 0 },
  },
  [theme.breakpoints.between("md", "lg")]: {
    "& .css-1eqr9bp": { paddingRight: "1rem" },
  },
}));

const ShowcaseCard3: FC = () => {
  return (
    <Link href="/home-3">
      <a>
        <StyledGrid container>
          <Grid item sm={6} xs={12}>
            <BazaarImage
              alt="apple-watch-1"
              src="/assets/images/products/t-shirt2.png"
              sx={{ mx: "auto", maxWidth: "100%", maxHeight: "225px" }}
            />
          </Grid>

          <Grid item sm={6} xs={12} py={4}>
            <Paragraph mb={1}>MENS SHIRTS</Paragraph>

            <H1 lineHeight={1.3}>
              <Span lineHeight={1.3}>Stylish</Span> Genuine <br /> Comfy
              T-shirts
            </H1>

            <Paragraph mt={1} mb={2}>
              Handcrafted from genuine Italian leather. One inner compartment
              with black satin lining
            </Paragraph>

            <NavLink2 title="SHOP NOW" borderColor="grey.100" />
          </Grid>
        </StyledGrid>
      </a>
    </Link>
  );
};

export default ShowcaseCard3;
