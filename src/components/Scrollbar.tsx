import { alpha, styled, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";
import SimpleBar, { Props } from "simplebar-react";

const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&.simplebar-visible:before": { opacity: 1 },
    "&:before": { backgroundColor: alpha(theme.palette.grey[400], 0.6) },
  },
  "& .simplebar-track.simplebar-vertical": { width: 9 },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": { height: 6 },
  "& .simplebar-mask": { zIndex: "inherit" },
}));

// props type
type ScrollbarProps = { children: ReactNode; sx?: SxProps };

const Scrollbar: FC<ScrollbarProps & Props> = ({ children, sx, ...props }) => {
  return (
    <StyledScrollBar sx={sx} {...props}>
      {children}
    </StyledScrollBar>
  );
};

export default Scrollbar;
