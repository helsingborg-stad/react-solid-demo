"use client";

import { AuthServiceProvider } from "../../../contexts/AuthServiceContext";
import { ServiceLocatorProvider } from "../../../contexts/ServiceLocatorContext";
import { ViewCountServiceProvider } from "../../../contexts/ViewCountServiceContext";
import FakeAuthService from "../../../services/authService/impl/fakeAuthService";
import type { IServiceLocator } from "../../../services/ServiceLocator.types";
import ApiViewCountService from "../../../services/viewCountService/impl/ApiViewCountService";

interface ProvidersProps {
  children: React.ReactNode;
}

function initializeServiceLocator(serviceLocator: IServiceLocator) {
  if (serviceLocator) {
    // console.log("Initializing Service Locator");
    console.dir(serviceLocator);
    serviceLocator.register("authService", new FakeAuthService());
    serviceLocator.register(
      "viewCountService",
      new ApiViewCountService(serviceLocator)
    );
  }
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <ServiceLocatorProvider onInit={initializeServiceLocator}>
      <AuthServiceProvider>
        <ViewCountServiceProvider>{children}</ViewCountServiceProvider>
      </AuthServiceProvider>
    </ServiceLocatorProvider>
  );
}
