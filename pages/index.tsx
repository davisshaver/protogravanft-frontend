// External imports.
import type { NextPage } from "next";

// Internal imports.
import DefaultLayout from "../layouts/Default";

/**
 * Homepage for ProtoGravaNFT.
 *
 * @returns {NextPage} Home page for Next.
 */
const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </DefaultLayout>
  );
};

export default Home;
