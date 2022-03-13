import React from "react";
import { useAccount, useConnect } from "wagmi";
import useIsMounted from "../../hooks/useIsMounted";

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
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect(connector)}
          >
            {connector.name}
            {!connector.ready && " (unsupported)"}
          </button>
        ))}
      {error && <div>{error?.message ?? "Failed to connect"}</div>}
    </>
  );
};

export default Connect;
