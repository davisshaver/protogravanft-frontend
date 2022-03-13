import type { NextPage } from "next";
import DefaultLayout from "../layouts/Default";

const About: NextPage = () => {
  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold underline">About this project</h1>
    </DefaultLayout>
  );
};

export default About;
