// Style imports.
import "../styles/globals.css";

// External imports.
import type { AppProps } from "next/app";
import { Provider } from "wagmi";

/**
 * ProtoGravaNFT Next.js application.
 *
 * @param {AppProps} props for Next.js application.
 * @param {NextComponentType} props.Component for Next.js page.
 * @param {Object} props.pageProps for Next.js page.
 * @returns {JSX.Element} for ProtoGravaNFT frontend.
 */
function ProtogravaNFTFrontend({ Component, pageProps }: AppProps) {
  return (
    <Provider autoConnect connectorStorageKey="protogravanft.wallet">
      <Component {...pageProps} />
    </Provider>
  );
}

export default ProtogravaNFTFrontend;
