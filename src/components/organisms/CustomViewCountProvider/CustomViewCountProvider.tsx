"use client";

import ViewCountServiceContext from "../../../contexts/ViewCountServiceContext";
import useViewCountService from "../../../hooks/useViewCountService";
import LocalViewCountService from "../../../services/viewCountService/impl/LocalViewCountService";

interface CustomViewCountProviderProps {
  children: React.ReactNode;
}

export default function CustomViewCountProvider({
  children,
}: CustomViewCountProviderProps): JSX.Element {
  const customViewCountService = useViewCountService({
    service: new LocalViewCountService("global"),
  });

  return (
    <ViewCountServiceContext.Provider value={customViewCountService}>
      {children}
    </ViewCountServiceContext.Provider>
  );
}
