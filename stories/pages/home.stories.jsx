import HomePage from "../../pages/index";
import { Provider } from "wagmi";

export default {
  title: "Pages/Home",
  component: HomePage,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export const Home = () => <HomePage />;
