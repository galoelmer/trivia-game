import React from 'react'

interface IReduceProvidersProps {
    providers: React.ReactElement[];
    children: React.ReactElement;
}

export default function ReduceProviders({ providers, children }: IReduceProvidersProps) {
    return providers.reduceRight((children, parent) => React.cloneElement(parent, { children }), children);
};
