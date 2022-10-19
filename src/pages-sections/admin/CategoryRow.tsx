import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import BazaarSwitch from "components/BazaarSwitch";
import React, { FC, useState } from "react";
import {
  CategoryWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "./StyledComponents";

// ========================================================================
type CategoryRowProps = {
  item: any;
  selected: any[];
};
// ========================================================================

const CategoryRow: FC<CategoryRowProps> = ({ item, selected }) => {
  const { category, name, level, banner, featured } = item;
  const isItemSelected = selected.indexOf(name) !== -1;

  // state
  const [featuredCategory, setFeaturedCategory] = useState(featured);

  return (
    <StyledTableRow
      tabIndex={-1}
      role="checkbox"
      selected={isItemSelected}
      aria-checked={isItemSelected}
    >
      <StyledTableCell align="left">{name}</StyledTableCell>

      <StyledTableCell align="left">
        <CategoryWrapper>{category}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">
        <Avatar src={banner} sx={{ borderRadius: "8px" }} />
      </StyledTableCell>

      <StyledTableCell align="left">{level}</StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch
          color="info"
          checked={featuredCategory}
          onChange={() => setFeaturedCategory((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CategoryRow;
