import React, { useEffect, useState } from "react";
import useServiceLocator from "../hooks/useServiceLocator";
import { ServiceLocator } from "../services/ServiceLocator";
import type { IServiceLocator } from "../services/ServiceLocator.types";

const ServiceLocatorContext = React.createContext<IServiceLocator | null>(null);

interface ServiceLocatorProviderProps {
  onInit: (serviceLocator: IServiceLocator) => void;
  children: React.ReactNode;
}

export function ServiceLocatorProvider({
  onInit,
  children,
}: ServiceLocatorProviderProps): JSX.Element {
  const [hasInitialized, setHasInitialized] = useState(false);
  const serviceLocator = useServiceLocator(ServiceLocator.getInstance());

  useEffect(() => {
    if (!hasInitialized) {
      setHasInitialized(true);
      onInit(serviceLocator);
    }
  }, [hasInitialized, onInit, serviceLocator]);

  /* console.log(
    "ServiceLocatorProvider serviceLocator",
    Object.keys((serviceLocator as ServiceLocator).services ?? {})
  ); */

  return (
    <ServiceLocatorContext.Provider value={serviceLocator}>
      {/* {Object.entries((serviceLocator as ServiceLocator).services ?? {})
        .map(([key, value]) => `${key} = ${value?.constructor?.name}`)
        .join(", ")} */}
      {children}
    </ServiceLocatorContext.Provider>
  );
}

export default ServiceLocatorContext;
