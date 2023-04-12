"use client";

import { useContext } from "react";
import ServiceLocatorContext from "../../../contexts/ServiceLocatorContext";
import FakeAuthService from "../../../services/authService/impl/fakeAuthService";
import GoogleAuthService from "../../../services/authService/impl/GoogleAuthService";
import ApiViewCountService from "../../../services/viewCountService/impl/ApiViewCountService";
import LocalViewCountService from "../../../services/viewCountService/impl/LocalViewCountService";
import ServiceSwitcher from "../../molecules/ServiceSwitcher/ServiceSwitcher";

export default function ServiceSwitchers(): JSX.Element {
  const serviceLocator = useContext(ServiceLocatorContext);

  if (!serviceLocator) {
    return <span>No Service Locator found</span>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <ServiceSwitcher
        serviceLocator={serviceLocator}
        serviceId="authService"
        options={[
          {
            name: "FakeAuthService",
            creator: () => new FakeAuthService(),
          },
          {
            name: "GoogleAuthService",
            creator: () => new GoogleAuthService(),
          },
        ]}
      />
      <ServiceSwitcher
        serviceLocator={serviceLocator}
        serviceId="viewCountService"
        options={[
          {
            name: "LocalViewCountService",
            creator: () => new LocalViewCountService("global"),
          },
          {
            name: "ApiViewCountService",
            creator: () => new ApiViewCountService(serviceLocator),
          },
        ]}
      />
    </div>
  );
}
