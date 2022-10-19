import { Delete, RemoveRedEye } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import BazaarSwitch from "components/BazaarSwitch";
import React, { FC, useState } from "react";
import {
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "./StyledComponents";

// ========================================================================
type BrandRowProps = {
  brand: any;
  selected: any[];
};
// ========================================================================

const BrandRow: FC<BrandRowProps> = ({ brand, selected }) => {
  const { name, featured, logo, id } = brand;
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
      <StyledTableCell align="center">{id}</StyledTableCell>

      <StyledTableCell align="center">{name}</StyledTableCell>

      <StyledTableCell align="center">
        <Avatar
          src={logo}
          sx={{ width: 55, height: "auto", margin: "auto", borderRadius: 0 }}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
        <BazaarSwitch
          color="info"
          checked={featuredCategory}
          onChange={() => setFeaturedCategory((state) => !state)}
        />
      </StyledTableCell>

      <StyledTableCell align="center">
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

export default BrandRow;
