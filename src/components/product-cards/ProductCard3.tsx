import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarRating from "components/BazaarRating";
import { FlexBetween, FlexBox } from "components/flex-box";
import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";
import { H4 } from "components/Typography";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";

// ========================================================
type ProductCard3Props = {
  id: number;
  off?: number;
  title: string;
  price: number;
  imgUrl: string;
  rating: number;
  className?: string;
  hideReview?: boolean;
  style?: CSSProperties;
  hideFavoriteIcon?: boolean;
};
// ========================================================

const ProductCard3: React.FC<ProductCard3Props> = ({
  id,
  title,
  price,
  imgUrl,
  rating,
  off = 20,
  hideReview,
  hideFavoriteIcon,
}) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Box>
      <Link href={`/product/${id}`}>
        <a>
          <HoverBox sx={{ borderRadius: "8px", overflow: "hidden" }}>
            <LazyImage
              width={0}
              mx="auto"
              height={0}
              alt={title}
              src={imgUrl}
              layout="responsive"
            />
          </HoverBox>
        </a>
      </Link>

      <FlexBetween mt={2}>
        <Box>
          <H4 fontWeight="600" fontSize="14px" mb={0.5} title={title} ellipsis>
            {title}
          </H4>

          {!hideReview && <BazaarRating value={rating} color="warn" readOnly />}

          <FlexBox gap={1} alignItems="center">
            <Box fontWeight="600" color="primary.main">
              ${(price - (price * off) / 100).toFixed(2)}
            </Box>

            {!!off && (
              <Box color="grey.600" fontWeight="600">
                <del>{price?.toFixed(2)}</del>
              </Box>
            )}
          </FlexBox>
        </Box>

        {!hideFavoriteIcon && (
          <BazaarButton
            disableRipple
            disableElevation
            onClick={() => setFavorite((state) => !state)}
            sx={{
              height: "0",
              alignItems: "flex-start",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {favorite ? (
              <Favorite fontSize="small" color="primary" />
            ) : (
              <FavoriteBorder fontSize="small" sx={{ opacity: 0.5 }} />
            )}
          </BazaarButton>
        )}
      </FlexBetween>
    </Box>
  );
};

export default ProductCard3;
