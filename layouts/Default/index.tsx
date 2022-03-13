// External imports.
import Head from "next/head";

// Internal imports.
import Nav from "../../components/Nav";

// Types.
import { DefaultLayoutProps } from "../../types/layouts";

/**
 * Default layout for ProtoGravaNFT.
 *
 * @param {Object} props for layout.
 * @param {string} props.children for layout.
 * @returns JSX.Element Default layout
 */
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Head>
        <title>ProtogravaNFT</title>
      </Head>
      <Nav />
      {children}
    </div>
  );
};

export default DefaultLayout;
