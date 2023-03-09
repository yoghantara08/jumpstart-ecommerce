import Head from "next/head";
import React from "react";
import MainFooter from "../footer/main-footer";
import DesktopNavigation from "../header/desktop-navigation";
import MobileNavigation from "../header/mobile-navigation";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const MainLayout: React.FC<Props> = ({ children, title }) => {
  let pageTitle: string = "Jumpstart";
  if (title) {
    pageTitle = title + " - Jumpstart";
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Jumpstart - Worldwide retail-chain owns 750 stores nationwide"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-roboto text-dark">
        <header>
          <nav className="flex px-3 lg:px-8 py-3 shadow items-center bg-white fixed top-0 left-0 z-30 w-full">
            <DesktopNavigation />
            <MobileNavigation />
          </nav>
        </header>
        <main className="mt-[66px] bg-light">{children}</main>
        <MainFooter />
      </div>
    </>
  );
};

export default MainLayout;
