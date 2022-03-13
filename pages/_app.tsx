import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "wagmi";

function ProtogravaNFTFrontend({ Component, pageProps }: AppProps) {
  return (
    <Provider autoConnect connectorStorageKey="protogravanft.wallet">
      <Component {...pageProps} />
    </Provider>
  );
}

export default ProtogravaNFTFrontend;
