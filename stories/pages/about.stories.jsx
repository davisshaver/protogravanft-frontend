import AboutPage from "../../pages/about";
import { Provider } from "wagmi";

export default {
  title: "Pages/About",
  component: AboutPage,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export const About = () => <AboutPage />;
