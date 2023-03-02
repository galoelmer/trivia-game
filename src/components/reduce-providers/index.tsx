import React, { PropsWithChildren } from "react";

interface IReduceProvidersProps {
  providers: React.JSXElementConstructor<PropsWithChildren<unknown>>[];
  children: React.ReactNode;
}

export default function ReduceProviders({
  providers,
  children,
}: IReduceProvidersProps) {
  return (
    <>
      {providers.reduceRight(
        (children, Parent) => (
          <Parent>{children}</Parent>
        ),
        children
      )}
    </>
  );
}
