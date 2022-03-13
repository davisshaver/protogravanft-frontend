import Head from "next/head";

import Connect from "../../components/Connect";
import Nav from "../../components/Nav";
import { DefaultLayoutProps } from "../../types/layouts";

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Head>
        <title>ProtogravaNFT</title>
      </Head>
      <Nav />
      <Connect />
      {children}
    </div>
  );
};

export default DefaultLayout;
