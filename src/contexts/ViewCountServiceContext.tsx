import { createContext, useContext } from "react";
import ServiceLocatorContext from "./ServiceLocatorContext";
import useViewCountService from "../hooks/useViewCountService";
import type { IViewCountService } from "../services/viewCountService/ViewCountService.types";

const ViewCountServiceContext = createContext<IViewCountService | null>(null);

interface ViewCountServiceProviderProps {
  children: React.ReactNode;
}

export function ViewCountServiceProvider({
  children,
}: ViewCountServiceProviderProps): JSX.Element {
  const serviceLocator = useContext(ServiceLocatorContext);
  const serviceInstance = useViewCountService({
    service: serviceLocator?.get("viewCountService"),
  });

  return (
    <ViewCountServiceContext.Provider value={serviceInstance}>
      {children}
    </ViewCountServiceContext.Provider>
  );
}

export default ViewCountServiceContext;
