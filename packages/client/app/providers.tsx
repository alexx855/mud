'use client';
import { useState, useEffect } from "react";
import { setup } from "../src/mud/setup";
import { MUDProvider } from "../src/MUDContext";
import type { SetupResult } from "../src/mud/setup";
// import { mount as mountDevTools } from "@latticexyz/dev-tools";

export function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const [result, setResult] = useState<SetupResult | null>(null);

  useEffect(() => {
    setup().then((result: SetupResult) => {
      console.log("setup result:", result);
      setResult(result);
      // mountDevTools();
    });
  }, []);

  if (!result) return <div>Loading...</div>;

  return (
    <MUDProvider value={result}>
      {children}
    </MUDProvider>
  );
}