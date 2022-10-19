import { Box, Container, styled } from "@mui/material";
import { FlexRowCenter } from "components/flex-box";
import appIcons from "components/icons/index";
import { H4, Span } from "components/Typography";
import { FC } from "react";

// custom styled components
const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "grid",
  padding: "2rem 0",
  gridTemplateColumns: "repeat(4, 1fr)",
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr",
  },
}));

const ServiceItem = styled(FlexRowCenter)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  ":last-child": { borderRight: 0 },
  [theme.breakpoints.down("md")]: { ":nth-of-type(even)": { borderRight: 0 } },
  [theme.breakpoints.down("sm")]: {
    borderRight: 0,
    justifyContent: "flex-start",
  },
}));

const data = [
  { icon: "Truck", title: "Fast Delivery", subtitle: "Start from $10" },
  { icon: "MoneyGuarantee", title: "Money Guarantee", subtitle: "7 Days Back" },
  { icon: "AlarmClock", title: "365 Days", subtitle: "For free return" },
  { icon: "Payment", title: "Payment", subtitle: "Secure system" },
];

// ===========================================================
type Section2Props = { serviceList?: any[] };
// ===========================================================

const Section2: FC<Section2Props> = () => {
  return (
    <Container sx={{ mt: "2rem" }}>
      <StyledFlexBox>
        {data.map((item, ind) => {
          const Icon = appIcons[item.icon];

          return (
            <ServiceItem flexGrow={1} gap={2} key={ind}>
              <Icon sx={{ fontSize: 40 }} />
              <Box>
                <H4 lineHeight={1.3}>{item.title}</H4>
                <Span color="grey.600">{item.subtitle}</Span>
              </Box>
            </ServiceItem>
          );
        })}
      </StyledFlexBox>
    </Container>
  );
};

export default Section2;
