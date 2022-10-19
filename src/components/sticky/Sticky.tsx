/* eslint-disable react-hooks/exhaustive-deps */
import { styled } from "@mui/material/styles";
import { slideDown } from "animations/keyframes";
import clsx from "clsx";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface StickyProps {
  fixedOn: number;
  scrollDistance?: number;
  children: ReactElement;
  containerRef?: { current: any };
  onSticky?: (isFixed: boolean) => void;
  notifyOnScroll?: (hasReachedPosition: boolean) => void;
  notifyPosition?: number;
}
type StyledBoxProps = {
  componentHeight?: number;
  fixedOn?: number;
  fixed?: boolean;
};

export const StyledBox = styled<React.FC<StyledBoxProps>>(
  ({ children, componentHeight, fixedOn, fixed, ...rest }) => (
    <div {...rest}>{children}</div>
  )
)<StyledBoxProps>(({ theme, componentHeight, fixedOn, fixed }) => ({
  "& .hold": {
    zIndex: 2,
    boxShadow: "none",
    position: "relative",
  },
  "& .fixed": {
    left: 0,
    right: 0,
    zIndex: 1500,
    position: "fixed",
    top: `${fixedOn}px`,
    boxShadow: theme.shadows[2],
    transition: "all 350ms ease-in-out",
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
  },
  "& + .section-after-sticky": { paddingTop: fixed ? componentHeight : 0 },
}));

const Sticky: React.FC<StickyProps> = ({
  fixedOn,
  scrollDistance = 0,
  containerRef,
  children,
  notifyPosition,
  notifyOnScroll,
  onSticky,
}) => {
  const [fixed, setFixed] = useState(false);
  const [parentHeight, setParentHeight] = useState(0);
  const elementRef = useRef<any>(null);
  const positionRef = useRef(0);

  const scrollListener = useCallback(() => {
    if (!window) return;

    // Distance of element from window top (-) minus value
    let distance = window.pageYOffset - positionRef.current;

    if (containerRef?.current) {
      let containerDistance =
        containerRef.current.offsetTop +
        containerRef.current?.offsetHeight -
        window.pageYOffset;

      if (notifyPosition && notifyOnScroll) {
        notifyOnScroll(
          distance <= notifyPosition && containerDistance > notifyPosition
        );
      }

      return setFixed(distance <= fixedOn && containerDistance > fixedOn);
    }

    if (notifyPosition && notifyOnScroll) {
      notifyOnScroll(distance >= notifyPosition);
    }

    let isFixed = distance >= fixedOn + scrollDistance;

    if (positionRef.current === 0) {
      isFixed =
        distance >= fixedOn + elementRef.current?.offsetHeight + scrollDistance;
    }

    setFixed(isFixed);
  }, []);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", scrollListener);
    window.addEventListener("resize", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", scrollListener);
    };
  }, []);

  useEffect(() => {
    if (!positionRef.current) {
      positionRef.current = elementRef.current?.offsetTop;
    }
    setParentHeight(elementRef.current?.offsetHeight || 0);
  }, [elementRef.current, children]);

  useEffect(() => {
    if (onSticky) onSticky(fixed);
  }, [fixed]);

  return (
    <StyledBox fixedOn={fixedOn} componentHeight={parentHeight} fixed={fixed}>
      <div className={clsx({ hold: !fixed, fixed: fixed })} ref={elementRef}>
        {children}
      </div>
    </StyledBox>
  );
};

export default Sticky;
