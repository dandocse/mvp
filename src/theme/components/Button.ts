import { Components, Theme } from "@mui/material";

// // ========================================================
// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     dark: true;
//     paste: true;
//     marron: true;
//   }

//   interface ButtonPropsSizeOverrides {
//     normal: true;
//   }
// }
// // =========================================================

const Button = (theme?: Theme): Components => ({
  // MuiButton: {
  //   styleOverrides: {
  //     root: ({ ownerState, theme }) => ({
  //       minWidth: 0,
  //       minHeight: 0,
  //       fontWeight: 600,
  //       boxShadow: "none",
  //       borderRadius: "6px",
  //       textTransform: "capitalize",
  //       ...(ownerState.size === "normal" && { padding: ".6rem 1.7rem" }),
  //     }),
  //     sizeLarge: { padding: "1rem 3rem" },
  //     sizeSmall: { padding: ".5rem 1rem" },
  //     sizeMedium: { padding: ".8rem 2rem" },
  //     containedInherit: { ":hover": { backgroundColor: theme.palette.grey[400] } },
  //   },
  //   defaultProps: { color: "primary", variant: "contained" },
  // },
});

export default Button;
