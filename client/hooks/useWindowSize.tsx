import { useEffect, useState } from "react";

export interface Size {
  width: number;
  height: number;
  desktop: boolean;
  mobile: boolean;
}

const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
    desktop: false,
    mobile: false,
  });

  const handleResize = () => {
    const desktop = window.innerWidth !== 0 && window.innerWidth >= 1024;
    const mobile = window.innerWidth !== 0 && window.innerWidth <= 1023;
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      desktop: desktop,
      mobile: mobile,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
