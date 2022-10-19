import { Avatar } from "@mui/material";
import {
  border,
  compose,
  sizing,
  spacing,
  styled,
  typography,
} from "@mui/system";

const BazaarAvatar = styled(Avatar)(
  compose(spacing, typography, sizing, border)
);

export default BazaarAvatar;
