import { Container, styled } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarCard from "components/BazaarCard";
import ShopLayout1 from "components/layouts/ShopLayout1";
import LazyImage from "components/LazyImage";
import Navbar from "components/navbar/Navbar";
import SEO from "components/SEO";
import { H1, Paragraph } from "components/Typography";
import { NextPage } from "next";
import Link from "next/link";

// custom styled components
const Wrapper = styled(BazaarCard)(() => ({
  margin: "auto",
  padding: "3rem",
  maxWidth: "630px",
  textAlign: "center",
}));

const StyledButton = styled(BazaarButton)(() => ({
  marginTop: "2rem",
  padding: "11px 24px",
}));

const OrderConfirmation: NextPage = () => {
  return (
    <ShopLayout1>
      <SEO title="Order Confirmation" />
      <Container sx={{ mt: 4, mb: 20 }}>
        <Wrapper>
          <LazyImage
            src="/assets/images/illustrations/party-popper.svg"
            width={116}
            height={116}
          />
          <H1 lineHeight={1.1} mt="1.5rem">
            Your order is completed!
          </H1>

          <Paragraph color="grey.800" mt="0.3rem">
            You will be receiving confirmation email with order details.
          </Paragraph>

          <Link href="/home-1" passHref>
            <StyledButton
              color="primary"
              disableElevation
              variant="contained"
              className="button-link"
            >
              Browse products
            </StyledButton>
          </Link>
        </Wrapper>
      </Container>
    </ShopLayout1>
  );
};

export default OrderConfirmation;
