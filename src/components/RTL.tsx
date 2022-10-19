import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import useSettings from "hooks/useSettings";
import { FC, ReactNode, useEffect } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// ========================================================
type RTLProps = { children?: ReactNode };
// ========================================================

const cacheRTL = createCache({
  key: "rtl",
  prepend: true,
  stylisPlugins: [rtlPlugin, prefixer],
});

const RTL: FC<RTLProps> = ({ children }) => {
  const { settings } = useSettings();

  useEffect(() => {
    document.dir = settings.direction;
  }, [settings.direction]);

  if (settings.direction === "rtl") {
    return <CacheProvider value={cacheRTL}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

export default RTL;
