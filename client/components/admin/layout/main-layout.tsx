import useWindowSize from "@/hooks/useWindowSize";
import { useAnimation } from "framer-motion";
import Head from "next/head";
import React, { useEffect } from "react";
import AdminNavbar from "../header/navbar";
import AdminSidebar from "../header/sidebar";

interface Props {
  title: string;
  children: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ title, children }) => {
  const { mobile } = useWindowSize();
  const controls = useAnimation();

  let pageTitle: string = "Jumpstart";
  if (title) {
    pageTitle = title + " - Jumpstart";
  }

  useEffect(() => {
    if (mobile) {
      controls.start("exit");
    }

    if (!mobile) {
      controls.start("animate");
    }
  }, [controls, mobile]);

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
      <div className="flex min-h-screen text-dark font-roboto bg-adminBg">
        <AdminSidebar controls={controls} />
        <div className="lg:ml-[300px] w-full">
          <AdminNavbar controls={controls} title={title} />
          <main className="p-5">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
