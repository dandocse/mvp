import { Box, BoxProps, Container } from "@mui/material";
import { FC, ReactNode } from "react";
import CategorySectionHeader from "./CategorySectionHeader";

// ==============================================================
type CategorySectionCreatorProps = {
  title?: string;
  icon?: ReactNode;
  seeMoreLink?: string;
};
// ==============================================================

const CategorySectionCreator: FC<CategorySectionCreatorProps & BoxProps> = (
  props
) => {
  const { icon, title, children, seeMoreLink, ...others } = props;

  return (
    <Box mb={7.5} {...others}>
      <Container sx={{ pb: "1rem" }}>
        {title && (
          <CategorySectionHeader
            title={title}
            seeMoreLink={seeMoreLink}
            icon={icon}
          />
        )}

        {children}
      </Container>
    </Box>
  );
};

export default CategorySectionCreator;
