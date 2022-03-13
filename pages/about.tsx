// External imports.
import type { NextPage } from "next";

// Internal imports.
import DefaultLayout from "../layouts/Default";

/**
 * About page for ProtoGravaNFT.
 *
 * @returns {NextPage} About page for Next.
 */
const About: NextPage = () => {
  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold underline">About this project</h1>
    </DefaultLayout>
  );
};

export default About;
