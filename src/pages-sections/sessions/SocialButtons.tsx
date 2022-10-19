import { Box, Divider } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import Image from "components/BazaarImage";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { H6 } from "components/Typography";
import Link from "next/link";
import React, { FC, Fragment } from "react";

type SocialButtonsProps = {
  redirect?: string;
  redirectText?: string;
  handleGoogle?: () => void;
  handleFacebook?: () => void;
};

const SocialButtons: FC<SocialButtonsProps> = (props) => {
  const { redirect = "/login", redirectText = "Login" } = props;

  return (
    <Fragment>
      <Box mb={2} mt={3.3}>
        <Box width="200px" mx="auto">
          <Divider />
        </Box>

        <FlexBox justifyContent="center" mt={-1.625}>
          <Box color="grey.600" bgcolor="background.paper" px={2}>
            or
          </Box>
        </FlexBox>
      </Box>

      <BazaarButton
        className="facebookButton"
        size="medium"
        fullWidth
        sx={{ height: 44 }}
      >
        <Image
          src="/assets/images/icons/facebook-filled-white.svg"
          alt="facebook"
        />
        <Box fontSize="12px" ml={1}>
          Continue with Facebook
        </Box>
      </BazaarButton>

      <BazaarButton
        className="googleButton"
        size="medium"
        fullWidth
        sx={{ height: 44 }}
      >
        <Image src="/assets/images/icons/google-1.svg" alt="facebook" />
        <Box fontSize="12px" ml={1}>
          Continue with Google
        </Box>
      </BazaarButton>

      <FlexRowCenter my="1.25rem">
        <Box>Don&apos;t have account?</Box>
        <Link href={redirect}>
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              {redirectText}
            </H6>
          </a>
        </Link>
      </FlexRowCenter>

      <FlexBox
        justifyContent="center"
        bgcolor="grey.200"
        borderRadius="4px"
        py={2.5}
      >
        Forgot your password?
        <Link href="/">
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              Reset It
            </H6>
          </a>
        </Link>
      </FlexBox>
    </Fragment>
  );
};

export default SocialButtons;
