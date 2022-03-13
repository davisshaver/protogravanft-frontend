import ConnectComponent from "../../components/Connect";
import { Provider } from "wagmi";

export default {
  title: "Components/Connect",
  component: ConnectComponent,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export const Connect = () => <ConnectComponent />;
