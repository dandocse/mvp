import { Add } from "@mui/icons-material";
import { Button, Theme, useMediaQuery } from "@mui/material";
import { FlexBox } from "components/flex-box";
import SearchInput from "components/SearchInput";
import React, { FC } from "react";

// ===============================================================
type SearchAreaProps = {
  buttonText: string;
  handleSearch: () => void;
  searchPlaceholder: string;
  handleBtnClick: () => void;
};
// ===============================================================

const SearchArea: FC<SearchAreaProps> = (props) => {
  const { searchPlaceholder, buttonText } = props;
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
      <SearchInput placeholder={searchPlaceholder} />

      <Button
        color="info"
        fullWidth={downSM}
        variant="contained"
        startIcon={<Add />}
        sx={{ minHeight: 44 }}
      >
        {buttonText}
      </Button>
    </FlexBox>
  );
};

SearchArea.defaultProps = {
  buttonText: "Add Product",
  searchPlaceholder: "Search Product...",
};

export default SearchArea;
