import { Box, Button, Container } from "@mui/material";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H1, Paragraph, Span } from "components/Typography";
import DoneIcon from "@mui/icons-material/Done";
import { Link as Scroll } from "react-scroll";
import Header from "./Header";

const Section1 = () => {
  return (
    <Box
      sx={{
        background: "url(/assets/images/landing/landing-bg-1.svg) center/cover",
      }}
    >
      <Header />

      <Container id="section-1" sx={{ mt: 12, position: "relative" }}>
        <Box maxWidth="830px" mx="auto" mb={6.5} textAlign="center">
          <H1 fontSize="40px" mb={3} fontWeight="900">
            <Span>Build your online store with</Span>
            <Box color="primary.main" lineHeight={1.2}>
              {" "}
              Bazaar
            </Box>
          </H1>

          <Paragraph
            fontSize="18px"
            fontWeight={500}
            maxWidth="540px"
            mx="auto"
            mb={5}
          >
            SEO friendly Next.js Ecommerce Template. Helps you to build
            performant online store faster.
            {/* Single-Vendor Layouts and 150+ UI Features.  */}
            {/* Trusted by{" "} */}
            {/* <Span color="primary.main">500+</Span> Users. */}
          </Paragraph>

          <FlexBox
            sx={{
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
              justifyContent: "center",
              mb: 5,
            }}
          >
            <FlexBox
              my={1}
              mr={2}
              alignItems="center"
              fontWeight={500}
              color="grey.900"
            >
              <DoneIcon color="success" fontSize="small" sx={{ mr: 0.6 }} />
              SSR
            </FlexBox>
            <FlexBox
              my={1}
              mr={2}
              alignItems="center"
              fontWeight={500}
              color="grey.900"
            >
              <DoneIcon color="success" fontSize="small" sx={{ mr: 0.6 }} />
              Rest API
            </FlexBox>
            <FlexBox
              my={1}
              alignItems="center"
              fontWeight={500}
              color="grey.900"
            >
              <DoneIcon color="success" fontSize="small" sx={{ mr: 0.6 }} />
              Multi vendor Support
            </FlexBox>
          </FlexBox>

          <FlexBox justifyContent="center" mb={16}>
            <Scroll to="get" duration={400} offset={-72 - 16} smooth={true}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ m: "0.5rem" }}
              >
                What&apos;s inside
              </Button>
            </Scroll>

            <Scroll to="demos" duration={400} offset={-72 - 16} smooth={true}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ m: "0.5rem" }}
              >
                View Demos
              </Button>
            </Scroll>
          </FlexBox>

          {/* <Box mt={4}>
            <a href="https://forms.gle/f8Yz9dMSvkdkbMkV6" target="_blank" rel="noreferrer">
              <Paragraph color="grey.600" sx={{ textDecoration: "underline", cursor: "pointer" }}>
                I need a Server & Database
              </Paragraph>
            </a>
          </Box> */}
        </Box>

        <LazyImage
          width={5417}
          height={1179}
          layout="responsive"
          src="/assets/images/landing/page-group-2.png"
        />
      </Container>
    </Box>
  );
};

export default Section1;
