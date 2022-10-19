import { IconButton } from "@mui/material";
import {
  bgcolor,
  border,
  compose,
  positions,
  sizing,
  spacing,
  styled,
  typography,
} from "@mui/system";

const BazaarIconButton = styled(IconButton)(
  compose(spacing, positions, typography, sizing, border, bgcolor)
);

export default BazaarIconButton;
