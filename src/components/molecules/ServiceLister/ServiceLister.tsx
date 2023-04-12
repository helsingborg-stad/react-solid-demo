"use client";

import { useContext } from "react";
import ServiceLocatorContext from "../../../contexts/ServiceLocatorContext";
import ViewCountServiceContext from "../../../contexts/ViewCountServiceContext";
import type { ServiceLocator } from "../../../services/ServiceLocator";

function hashStringToColor(input: string): string {
  let hash = 0;
  for (let i = 0, len = input.length; i < len; i++) {
    const chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  if (hash < 0) hash = -hash;

  const colors = [
    "#8fbcbb",
    "#88c0d0",
    "#5e81ac",
    "#bf616a",
    "#d08770",
    "#ebcb8b",
    "#a3be8c",
    "#b48ead",
  ];

  return colors[hash % (colors.length - 1)];
}

export default function ServiceLister(): JSX.Element {
  const serviceLocator = useContext(ServiceLocatorContext);

  const viewCountService = useContext(ViewCountServiceContext);

  return (
    <div
      style={{
        display: "flex",
        gap: 3,
        margin: "5px 10px",
        fontSize: 12,
      }}
    >
      {Object.entries((serviceLocator as ServiceLocator)?.services ?? {}).map(
        ([serviceName, serviceInstance]) => (
          <span
            key={serviceName}
            style={{
              padding: "5px 10px",
              borderRadius: 5,
              color: hashStringToColor(serviceInstance?.constructor?.name),
              backgroundColor: "#4c566a",
            }}
          >
            {serviceName}: {serviceInstance?.constructor?.name}
          </span>
        )
      )}
      <span
        style={{
          padding: "5px 10px",
          borderRadius: 5,
          color: hashStringToColor(viewCountService?.constructor?.name ?? ""),
          backgroundColor: "#4c566a",
        }}
      >
        viewCountService(context): {viewCountService?.constructor?.name}
      </span>
    </div>
  );
}
