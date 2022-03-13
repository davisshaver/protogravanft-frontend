// External imports.
import React from "react";
import { useAccount, useConnect } from "wagmi";

// Internal imports.
import useIsMounted from "../../hooks/useIsMounted";

// Component imports.
import classes from "./classes";

/**
 * Connect component for ProtoGravaNFT frontend.
 *
 * @returns JSX.Element Connect button for dapp
 */
const Connect = () => {
  // Helper hooks
  const isMounted = useIsMounted();

  // WAGMI hooks
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data, error }, connect] = useConnect();

  if (!isMounted) {
    return <>Loading...</>;
  }

  if (accountData) {
    return (
      <div>
        {accountData.ens?.avatar && (
          <img src={accountData.ens?.avatar} alt="ENS Avatar" />
        )}
        <div>
          {accountData.ens?.name ? accountData.ens?.name : accountData.address}
        </div>
        {accountData.connector?.name && (
          <div>Connected to {accountData.connector?.name}</div>
        )}
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <>
      {isMounted &&
        data.connectors.map((connector) => (
          <button
            className={classes.buttonContainer}
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect(connector)}
          >
            Connect
          </button>
        ))}
      {error && <div>{error?.message ?? "Failed to connect"}</div>}
    </>
  );
};

export default Connect;
