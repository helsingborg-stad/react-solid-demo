"use client";

import type { IServiceLocator } from "../../../services/ServiceLocator.types";
import type { ServiceTypes } from "../../../services/Services";
import { Dropdown } from "../../atoms";

interface Option<T extends keyof ServiceTypes> {
  name: string;
  creator: () => ServiceTypes[T];
}

interface ServiceSwitcherProps<T extends keyof ServiceTypes> {
  serviceLocator: IServiceLocator;
  serviceId: T;
  options: Option<T>[];
}

export default function ServiceSwitcher<T extends keyof ServiceTypes>({
  serviceLocator,
  serviceId,
  options,
}: ServiceSwitcherProps<T>): JSX.Element {
  const onChange = (value: string) => {
    console.log("ServiceSwitcher onChange", value);
    const option = options.find((opt) => opt.name === value);
    const newServiceInstance = option?.creator();

    if (newServiceInstance) {
      serviceLocator.register(serviceId, newServiceInstance);
    }
  };

  const service = serviceLocator.get(serviceId);
  const active = service?.constructor.name;

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      <span>{serviceId}</span>
      <Dropdown
        onChange={onChange}
        active={active}
        values={options.map((option) => option.name)}
      />
    </div>
  );
}
