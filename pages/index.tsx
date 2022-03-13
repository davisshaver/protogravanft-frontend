import type { NextPage } from "next";

import DefaultLayout from "../layouts/Default";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </DefaultLayout>
  );
};

export default Home;
