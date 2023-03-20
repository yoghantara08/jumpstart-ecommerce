import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { navigationVariants } from "@/animation/navigation-motion";
import SearchBar from "./search-bar";
import { FiMenu, FiX } from "react-icons/fi";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import AuthContext from "@/contexts/auth-context";
import UserMenu from "./user-menu";

const MobileNavigation = () => {
  const { pathname } = useRouter();
  const { mobile } = useWindowSize();
  const [menu, setMenu] = useState<boolean>(false);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (!mobile) {
      setMenu(false);
    }
  }, [mobile]);

  useEffect(() => {
    if (menu) {
      // Prevent body scrolling when mobile nav appear
      document.body.style.overflow = "hidden";
    }

    // Remove overflow on cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  return (
    <>
      <div className="lg:hidden w-full flex justify-between items-center space-x-3">
        <SearchBar />
        <div
          onClick={() => setMenu((prev) => !prev)}
          className="text-4xl cursor-pointer z-20"
        >
          {menu ? <FiX /> : <FiMenu />}
        </div>
      </div>
      <AnimatePresence mode="wait">
        {menu && (
          <motion.ul
            key={pathname}
            variants={navigationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute right-0 top-0 left-0 bottom-0 h-screen flex flex-col 
            text-center font-semibold gap-3 py-5 bg-cream1 pt-20"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-center">
              <Link href="/products">Products</Link>
            </li>
            {isLoggedIn === "AUTHENTICATED" && <UserMenu />}
            {isLoggedIn === "UNAUTHENTICATED" && (
              <>
                <li>
                  <Link href="/auth/login">
                    <button className="button-primary-outlined py-2 w-full max-w-[200px]">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register">
                    <button className="button-primary py-2 w-full max-w-[200px]">
                      Register
                    </button>
                  </Link>
                </li>
              </>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
