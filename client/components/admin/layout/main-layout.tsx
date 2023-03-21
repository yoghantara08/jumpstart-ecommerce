import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import AdminNavbar from "../header/navbar";
import AdminSidebar from "../header/sidebar";

interface Props {
  title: string;
  children: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ title, children }) => {
  const { mobile } = useWindowSize();
  const [toggle, setToggle] = useState<boolean>(true);

  let pageTitle: string = "Jumpstart";
  if (title) {
    pageTitle = title + " - Jumpstart";
  }

  useEffect(() => {
    if (mobile) {
      setToggle(false);
    }

    if (!mobile) {
      setToggle(true);
    }
  }, [mobile]);

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
        {toggle && <AdminSidebar />}
        <div className="lg:ml-[300px] w-full overflow-x-hidden">
          <AdminNavbar toggle={toggle} setToggle={setToggle} title={title} />
          <main className="p-5">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
