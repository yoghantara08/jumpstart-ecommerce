import Head from "next/head";
import React from "react";
import AdminNavbar from "../header/navbar";
import AdminSidebar from "../header/sidebar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AdminLayout: React.FC<Props> = ({ title, children }) => {
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
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div>
          <AdminNavbar />
          <main>{children}</main>
        </div>
      </div>
      ;
    </>
  );
};

export default AdminLayout;
