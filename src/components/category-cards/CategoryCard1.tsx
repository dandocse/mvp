import { Box, styled } from "@mui/material";
import { H4 } from "components/Typography";
import Image from "next/image";
import { FC } from "react";

// custom styled components
const Wrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "4px",
  "& img": { transition: "all 0.3s" },
  ":hover": {
    img: { transform: "scale(1.1)" },
    "& .category-title": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.dark.main,
    },
  },
}));

const CategoryTitle = styled(Box)(() => ({
  left: 10,
  right: 10,
  bottom: 10,
  padding: 8,
  textAlign: "center",
  borderRadius: "2px",
  position: "absolute",
  transition: "all 0.3s",
  backgroundColor: "rgba(255,255,255, .67)",
}));

// ============================================================
type CategoryCard1Props = {
  image: string;
  title: string;
};
// ============================================================

const CategoryCard1: FC<CategoryCard1Props> = ({ image, title }) => {
  return (
    <Wrapper position="relative">
      <Image
        src={image}
        width={300}
        height={300}
        alt="category"
        objectFit="cover"
        layout="responsive"
      />

      <CategoryTitle className="category-title">
        <H4>{title}</H4>
      </CategoryTitle>
    </Wrapper>
  );
};

export default CategoryCard1;
