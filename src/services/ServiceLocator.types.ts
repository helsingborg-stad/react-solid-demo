import type { ServiceTypes } from "./Services";

export interface IServiceLocator {
  register<K extends keyof ServiceTypes>(id: K, value: ServiceTypes[K]): void;
  get<K extends keyof ServiceTypes>(id: K): ServiceTypes[K] | undefined;
}
